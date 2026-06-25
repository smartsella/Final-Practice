# Form Listing Application

A complete CRUD application for managing form submissions with React frontend and Node.js/Express/MongoDB backend.

## Project Structure

```
form-listing/
├── Backend/                 # Node.js/Express API
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   ├── controllers/        # Business logic
│   ├── models/             # MongoDB schemas
│   └── routes/             # API routes
└── Frondend/               # React frontend
    ├── package.json        # Frontend dependencies
    ├── src/
    │   ├── App.jsx         # Main app component
    │   ├── components/     # React components
    │   └── services/       # API service functions
    └── vite.config.js      # Vite configuration
```

## Features

✅ **Frontend (React)**

- Form submission with validation
- Real-time list updates
- Edit form entries
- Delete form entries
- Responsive design
- Loading states

✅ **Backend (Node.js/Express)**

- RESTful API endpoints
- CRUD operations
- MongoDB integration
- Error handling
- CORS enabled

✅ **Database (MongoDB)**

- Form data persistence
- Timestamps for submissions
- Data validation

## Installation & Setup

### 1. Install MongoDB

Make sure MongoDB is installed and running on your system.

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/form-listing
NODE_ENV=development
```

Start the backend:

```bash
npm run dev    # with nodemon (development)
# or
npm start      # simple start
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../Frondend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173` (or another available port)

## API Endpoints

### Create Form

- **POST** `/api/forms`
- Body: `{ firstName, lastName, email, phone, message }`
- Response: Created form data

### Get All Forms

- **GET** `/api/forms`
- Response: Array of all forms

### Get Form by ID

- **GET** `/api/forms/:id`
- Response: Single form data

### Update Form

- **PUT** `/api/forms/:id`
- Body: `{ firstName, lastName, email, phone, message }`
- Response: Updated form data

### Delete Form

- **DELETE** `/api/forms/:id`
- Response: Deleted form data

## Usage

1. **Submit a Form**: Fill in all required fields in the form section and click Submit
2. **View Submissions**: All submitted forms appear in the list section automatically
3. **Edit Entry**: Click the Edit button on any form card to modify the data
4. **Delete Entry**: Click the Delete button to remove a form

## Data Flow

```
React Form Component
    ↓ (formData)
API Service (api.js)
    ↓ (HTTP POST)
Express Backend
    ↓ (Business Logic)
Controller (formController.js)
    ↓ (Save to DB)
MongoDB
    ↓ (Response)
API Service
    ↓ (Update State)
React List Component
    ↓ (Display)
User Interface
```

## Technologies Used

- **Frontend**: React 19, Vite, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Tools**: Nodemon (development), CORS middleware

## Key Concepts

### Form Submission Flow

1. User fills form → React state updated
2. On submit → API service sends POST request
3. Backend validates and saves to MongoDB
4. Response returned to frontend
5. List component refreshed automatically

### CRUD Operations

- **Create**: POST to `/api/forms` with form data
- **Read**: GET from `/api/forms` or `/api/forms/:id`
- **Update**: PUT to `/api/forms/:id` with updated data
- **Delete**: DELETE request to `/api/forms/:id`

### State Management

- Frontend uses React useState for form state
- List component refreshes when trigger changes
- Parent App component manages refresh trigger

## Error Handling

- Invalid form data validation on backend
- Try-catch blocks for error handling
- User-friendly error messages
- Confirmation before deletion

## Future Enhancements

- User authentication
- Search and filtering
- Pagination
- Export to CSV
- Email notifications
- Form templates

## Troubleshooting

**MongoDB connection error?**

- Check if MongoDB service is running
- Verify connection string in `.env`

**Frontend can't reach backend?**

- Check backend is running on port 5000
- Verify CORS is enabled
- Check API_URL in frontend `api.js`

**Form not updating?**

- Clear browser cache
- Check browser console for errors
- Verify backend API is responding
