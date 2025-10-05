# Conference Next 🎤

Modern web application for managing talk proposals and conferences.

## 🚀 Features

- 📝 Submit talk proposals
- 👀 Browse list of talks
- 🎨 Modern UI with React and TailwindCSS
- 🔄 REST API documented with Swagger
- 🧪 Frontend and backend tests
- 🐳 Easy deployment with Docker

## 🛠️ Technologies

### Frontend
- **React 19** - JavaScript framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router** - Routing
- **Axios** - HTTP client
- **Vitest** - Unit testing

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **Swagger** - API documentation
- **Jest** - Unit testing

### DevOps
- **Docker & Docker Compose** - Containerization
- **GitHub Actions** - CI/CD (ready to configure)

## 📦 Installation

### With Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/ludovic/conference-next.git
cd conference-next

# Start the application
docker-compose up
```

The application will be accessible at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- API Documentation: http://localhost:3000/api-docs

### Local Installation

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🧪 Tests

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
npm test
```

## 📚 API Endpoints

- `GET /api/talks` - Get all talks
- `POST /api/talks` - Create a new talk

Full documentation available at `/api-docs`

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

MIT
