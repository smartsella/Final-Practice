Setup

1. Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI`, `PORT`, and `JWT_SECRET`.
2. Make sure MongoDB is running locally or use a cloud MongoDB URI.
3. Install dependencies:

```bash
cd backend
npm install
```

4. Start server:

```bash
npm run dev   # or npm start
```

API endpoints

- POST /api/auth/register { fullName, email, password }
- POST /api/auth/login { email, password }

Responses include user object and login returns `token` (JWT).
