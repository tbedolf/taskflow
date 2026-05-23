# TaskFlow — Remote Team Task Board

TaskFlow is a real-time collaborative task management platform inspired by Trello and Jira.

## Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- React Router
- Axios
- Socket.IO Client
- dnd-kit

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Socket.IO

### DevOps
- Docker
- GitHub Actions
- Vercel / Render Deployment

---

# Features

- User Authentication
- Workspace Management
- Project Boards
- Drag-and-Drop Tasks
- Real-Time Updates
- Comments & Attachments
- Activity Feed
- Email Notifications

---

# Project Structure

```bash
taskflow/
├── frontend/
├── backend/
├── docker-compose.yml
└── README.md
```

---

# Quick Start

## 1. Clone Project

```bash
git clone <repo-url>
cd taskflow
```

---

# 2. Start PostgreSQL

```bash
docker compose up -d
```

---

# 3. Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev --name init
npm run dev
```

Backend runs on:

```text
http://localhost:5001
```

---

# 4. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Prisma Models Planned

- User
- Workspace
- WorkspaceMember
- Project
- Task
- Comment
- ActivityLog
- Attachment

---

# Team Roles

- Frontend Lead
- Backend Lead
- Database Engineer
- DevOps Engineer
- QA / Documentation

---

# Future Improvements

- Mobile responsive optimization
- Dark mode
- AI task suggestions
- Calendar integration
- Analytics dashboard
