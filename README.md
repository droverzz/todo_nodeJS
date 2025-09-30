# Todo App

## Stack
- Frontend: Next.js, React, TypeScript, TailwindCSS
- Backend: Node.js (API routes in Next.js)
- Database: SQLite (for simplicity)
- ORM: Sequelize (if used)
- Deployment: Vercel / Netlify

## Installation
```bash
git clone <repo-url>
cd web-todo
npm install
npm run dev


## API
GET /api/todos → list todos

POST /api/todos → add todo

PUT /api/todos/[id] → update todo

DELETE /api/todos/[id] → delete todo
