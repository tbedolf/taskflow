# 📋 TaskFlow

A full-stack collaborative task management application inspired by tools like Trello and Jira.

TaskFlow combines a React frontend with a Node.js/Express backend, PostgreSQL, Prisma ORM, JWT authentication, Socket.IO, and Docker-based local database setup. The project is designed around workspaces, projects, task boards, and real-time collaboration.

🌐 **Live Application:**  
https://taskflow-snowy-two.vercel.app

---

## ✨ Features

- 🔐 User registration and login
- 🛡️ JWT-based authentication
- 🏢 Workspace management
- 📁 Project management
- ✅ Task board workflow
- 📊 Dashboard interface
- 🔄 Real-time communication support with Socket.IO
- 🗄️ PostgreSQL database integration
- 🔧 Prisma ORM for database access
- 🐳 Docker Compose for local PostgreSQL setup
- ☁️ Frontend deployment with Vercel

---

## 🛠️ Tech Stack

### Frontend

- React 18
- Vite
- React Router
- Axios
- Tailwind CSS
- Socket.IO Client

### Backend

- Node.js
- Express.js
- Prisma ORM
- JWT
- bcryptjs
- Socket.IO
- Morgan
- CORS
- dotenv

### Database

- PostgreSQL

### Infrastructure & Deployment

- Docker Compose
- Vercel
- Render-ready backend architecture

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│            User              │
│         Web Browser          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       React / Vite App       │
│ React Router • Tailwind CSS  │
│        Axios Client          │
└──────────────┬───────────────┘
               │
         REST API / Socket.IO
               │
               ▼
┌──────────────────────────────┐
│     Node.js / Express API    │
│ JWT Auth • Socket.IO Server  │
└──────────────┬───────────────┘
               │
            Prisma ORM
               │
               ▼
┌──────────────────────────────┐
│          PostgreSQL          │
│     Docker Compose Local     │
└──────────────────────────────┘
```

---

## 🖥️ Application Pages

The frontend currently includes:

- `Dashboard.jsx`
- `Login.jsx`
- `Register.jsx`
- `Projects.jsx`
- `TaskBoard.jsx`
- `Workspaces.jsx`

These pages provide the primary user experience for authentication, workspace navigation, project management, and task tracking.

---

## 📁 Project Structure

```text
taskflow/
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── vercel.json
│
├── docker-compose.yml
└── README.md
```

---

## 🔐 Authentication

TaskFlow uses JSON Web Tokens (JWT) for authentication.

The backend also includes `bcryptjs` for secure password hashing and middleware support for protecting authenticated routes.

---

## 🗄️ Database

TaskFlow uses PostgreSQL with Prisma ORM.

The Prisma directory includes both the database schema and migrations, making the data model version-controlled and reproducible across environments.

The project is structured around task-management entities such as:

- Users
- Workspaces
- Workspace membership
- Projects
- Tasks

The repository documentation also identifies comments, activity logs, and attachments as areas for continued development.

---

## 🔄 Real-Time Collaboration

Both the frontend and backend include Socket.IO packages.

This provides the foundation for real-time collaboration features such as live task and project updates without requiring users to manually refresh the page.

---

## 🚀 Local Development

### 1. Clone the repository

```bash
git clone git@github.com:btambe-dev/taskflow.git
cd taskflow
```

### 2. Start PostgreSQL

```bash
docker compose up -d
```

### 3. Install and start the backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

The backend is configured for local development on:

```text
http://localhost:5001
```

### 4. Install and start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs locally on:

```text
http://localhost:5173
```

---

## 🔧 Environment Configuration

Create the required backend environment variables before starting the application.

Example:

```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
CLIENT_URL=http://localhost:5173
```

> Never commit production credentials or secrets to the repository.

---

## 🐳 Docker

The repository includes a root-level `docker-compose.yml` for local infrastructure.

Docker Compose simplifies PostgreSQL setup and makes it easier to recreate the development environment.

Typical commands:

```bash
docker compose up -d
docker compose ps
docker compose down
```

---

## 🎯 What This Project Demonstrates

TaskFlow demonstrates hands-on experience with:

- Full-stack web development
- React application architecture
- Node.js and Express APIs
- Authentication and authorization
- PostgreSQL
- Prisma ORM
- Database migrations
- Real-time communication with Socket.IO
- REST API integration with Axios
- Docker Compose
- Frontend routing
- Environment configuration
- Cloud deployment workflows
- Troubleshooting frontend/backend integration

---

## 🔮 Future Improvements

Potential future enhancements include:

- Expanded comments and attachments
- Activity tracking
- Email notifications
- Mobile responsiveness improvements
- Dark mode
- Calendar integration
- Analytics dashboard
- AI-assisted task suggestions
- Automated testing
- Expanded CI/CD workflows

---

## 👤 Author

**Bedolf Tambe**

Cloud • DevOps • Networking • Systems Administration • Software Engineering
