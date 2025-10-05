const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Conférence',
      version: '1.0.0',
      description: 'API pour gérer les talks de conférence',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur de développement',
      },
    ],
  },
  apis: ['./index.js', './app.js'], // Fichiers contenant les annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const apiRouter = express.Router();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Talk:
 *       type: object
 *       required:
 *         - title
 *         - speaker
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-généré du talk
 *         title:
 *           type: string
 *           description: Titre du talk
 *         speaker:
 *           type: string
 *           description: Nom du conférencier
 *         description:
 *           type: string
 *           description: Description du talk
 *       example:
 *         id: 1
 *         title: "Introduction à Docker"
 *         speaker: "Jean Dupont"
 *         description: "Découvrez les bases de Docker"
 */

/**
 * @swagger
 * /talks:
 *   get:
 *     summary: Récupère la liste de tous les talks
 *     tags: [Talks]
 *     responses:
 *       200:
 *         description: Liste des talks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Talk'
 *       500:
 *         description: Erreur serveur
 */
apiRouter.get('/talks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM talks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

/**
 * @swagger
 * /talks:
 *   post:
 *     summary: Crée un nouveau talk
 *     tags: [Talks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - speaker
 *             properties:
 *               title:
 *                 type: string
 *               speaker:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Talk créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Talk'
 *       500:
 *         description: Erreur serveur
 */
apiRouter.post('/talks', async (req, res) => {
  try {
    const { title, speaker, description } = req.body;
    const newTalk = await pool.query(
      'INSERT INTO talks (title, speaker, description) VALUES ($1, $2, $3) RETURNING *',
      [title, speaker, description]
    );
    res.json(newTalk.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.use('/api', apiRouter);

// Export app and pool for testing
module.exports = { app, pool };
