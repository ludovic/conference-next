const request = require('supertest');
const { app, pool } = require('./app');

// Mock the database pool
jest.mock('pg', () => {
  const mPool = {
    query: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

// Suppress console.error during tests
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

describe('API Endpoints', () => {
  afterAll(() => {
    // Cleanup mocks
    jest.clearAllMocks();
  });

  describe('GET /api/talks', () => {
    it('should return all talks', async () => {
      const mockTalks = [
        {
          id: 1,
          title: 'Introduction à Docker',
          speaker: 'Jean Dupont',
          description: 'Découvrez les bases de Docker',
        },
        {
          id: 2,
          title: 'Les bases de React',
          speaker: 'Marie Martin',
          description: 'Apprenez React de zéro',
        },
      ];

      pool.query.mockResolvedValueOnce({ rows: mockTalks });

      const response = await request(app).get('/api/talks');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTalks);
      expect(pool.query).toHaveBeenCalledWith('SELECT * FROM talks');
    });

    it('should handle database errors', async () => {
      pool.query.mockRejectedValueOnce(new Error('Database error'));

      const response = await request(app).get('/api/talks');

      expect(response.status).toBe(500);
      expect(response.text).toBe('Server error');
    });
  });

  describe('POST /api/talks', () => {
    it('should create a new talk', async () => {
      const newTalk = {
        title: 'Test Talk',
        speaker: 'Test Speaker',
        description: 'Test Description',
      };

      const mockResponse = {
        rows: [
          {
            id: 1,
            ...newTalk,
          },
        ],
      };

      pool.query.mockResolvedValueOnce(mockResponse);

      const response = await request(app).post('/api/talks').send(newTalk);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockResponse.rows[0]);
      expect(pool.query).toHaveBeenCalledWith(
        'INSERT INTO talks (title, speaker, description) VALUES ($1, $2, $3) RETURNING *',
        [newTalk.title, newTalk.speaker, newTalk.description]
      );
    });

    it('should handle database errors when creating a talk', async () => {
      const newTalk = {
        title: 'Test Talk',
        speaker: 'Test Speaker',
        description: 'Test Description',
      };

      pool.query.mockRejectedValueOnce(new Error('Database error'));

      const response = await request(app).post('/api/talks').send(newTalk);

      expect(response.status).toBe(500);
      expect(response.text).toBe('Server error');
    });
  });
});
