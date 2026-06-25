# Complete Setup Guide for Form Listing Application

## 📋 Prerequisites

Before starting, make sure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download Community Edition](https://www.mongodb.com/try/download/community)
- **Git** (optional, for version control)

## 🚀 Step-by-Step Setup

### Step 1: Start MongoDB

#### Windows

1. Open PowerShell as Administrator
2. Run:

```powershell
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```

Or if installed via MongoDB Compass, it usually starts automatically.

#### Alternative: Use MongoDB Cloud (Atlas)

If you don't want to install MongoDB locally:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `.env` file with the connection string

### Step 2: Backend Setup

1. Navigate to Backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

Expected packages: express, mongoose, cors, dotenv, nodemon

3. Start the backend server:

```bash
npm run dev
```

Expected output:

```
Server is running on http://localhost:5000
MongoDB connected successfully
```

✅ Backend is now running!

### Step 3: Frontend Setup

1. Open a new terminal and navigate to Frontend folder:

```bash
cd Frondend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Expected output:

```
VITE v5.0.0  ready in XXX ms

➜  Local:   http://localhost:5173/
```

4. Open http://localhost:5173/ in your browser

✅ Application is now running!

---

## 📊 Data Flow Explanation

### When you submit a form:

```
1. User fills form fields
   ↓
2. Click Submit button
   ↓
3. React validates and sends POST request to backend
   ↓ (API: POST /api/forms)
   ↓
4. Backend receives data
   ↓
5. Backend validates data
   ↓
6. MongoDB saves the document
   ↓
7. Backend sends success response
   ↓
8. Frontend receives response and clears form
   ↓
9. Frontend automatically refreshes list
   ↓
10. New entry appears in list section
```

### When you view the list:

```
1. ListComponent mounts or trigger changes
   ↓
2. Calls getAllForms() from API service
   ↓ (API: GET /api/forms)
   ↓
3. Backend queries MongoDB
   ↓
4. MongoDB returns all documents sorted by date
   ↓
5. Backend sends JSON response
   ↓
6. Frontend receives and displays in list
```

### When you edit or delete:

```
Edit:  PUT /api/forms/:id → Backend updates → MongoDB → Response → List refreshes
Delete: DELETE /api/forms/:id → Backend deletes → MongoDB → Response → List refreshes
```

---

## 🔧 Configuration Files

### Backend `.env` file

```ini
PORT=5000
MONGODB_URI=mongodb://localhost:27017/form-listing
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**

```ini
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/form-listing
NODE_ENV=development
```

### Frontend API URL

Located in `src/services/api.js`:

```javascript
const API_URL = "http://localhost:5000/api/forms";
```

If backend runs on different port, update this URL.

---

## 📁 Project Structure

```
Backend/
├── server.js                    # Main server file
├── package.json                 # Dependencies
├── .env                         # Configuration
├── controllers/
│   └── formController.js       # Business logic (C, R, U, D)
├── models/
│   └── Form.js                 # MongoDB schema
└── routes/
    └── formRoutes.js           # API endpoints

Frontend/
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── index.html                   # HTML entry point
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Main app component
    ├── App.css                 # Main styles
    ├── components/
    │   ├── FormComponent.jsx   # Form submission
    │   ├── FormComponent.css
    │   ├── ListComponent.jsx   # Data display & edit/delete
    │   └── ListComponent.css
    └── services/
        └── api.js              # API functions
```

---

## 🎯 Features Explained

### FormComponent

- **Purpose**: Handle form input and submission
- **State**: firstName, lastName, email, phone, message
- **Features**:
  - Form validation
  - Loading state during submission
  - Success/error messages
  - Auto-clear on success
  - Calls parent callback to refresh list

### ListComponent

- **Purpose**: Display, edit, and delete submissions
- **Features**:
  - Auto-load on mount
  - Auto-refresh when trigger changes
  - Inline editing
  - Delete with confirmation
  - Formatted date display
  - Empty state handling

### Backend API

- **POST /api/forms**: Submit new form
- **GET /api/forms**: Get all forms (sorted newest first)
- **GET /api/forms/:id**: Get single form
- **PUT /api/forms/:id**: Update form
- **DELETE /api/forms/:id**: Delete form

---

## ⚠️ Troubleshooting

### Backend won't start

**Error**: `MongoNetworkError`

- Solution: Check if MongoDB is running
- Run: `net start MongoDB` (Windows) or `brew services start mongodb-community` (Mac)

**Error**: `EADDRINUSE: address already in use :::5000`

- Solution: Port 5000 is in use
- Kill process: `lsof -ti:5000 | xargs kill -9`

### Frontend shows "Failed to connect"

**Error**: Cannot reach backend

- Check: Backend is running on port 5000
- Check: CORS is enabled in server.js
- Update API_URL if backend runs on different port

### Form data not showing in list

- Refresh browser
- Check browser console for errors
- Check Network tab in DevTools
- Verify MongoDB has data: Use MongoDB Compass

### MongoDB Connection Issues

**Use MongoDB Compass to verify:**

1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Navigate to `form-listing` database
4. Check `forms` collection

---

## 🔒 Security Notes

For production, add:

- Input validation on both frontend and backend
- User authentication
- Environment variables for sensitive data
- HTTPS instead of HTTP
- Rate limiting
- SQL injection protection (N/A for MongoDB, but still use proper queries)
- CSRF protection

---

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/)
- [RESTful API Best Practices](https://restfulapi.net/)

---

## 🎓 Next Steps to Learn

1. Add user authentication (login/signup)
2. Add form categories/templates
3. Implement search and filtering
4. Add pagination for large datasets
5. Create API documentation (Swagger)
6. Add unit and integration tests
7. Deploy to production (Heroku, AWS, etc.)
