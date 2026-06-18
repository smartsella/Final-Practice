# Employee Management System - MERN Stack

## Project Overview

A full-stack Employee Management System built with:

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Styling**: Modern CSS with responsive design

## Project Structure

```
Task-6/
├── Back-end/
│   ├── controller/
│   │   └── employeeController.js       # Business logic for CRUD operations
│   ├── models/
│   │   └── Employee.js                  # MongoDB schema definition
│   ├── routes/
│   │   └── employeeRoutes.js            # API route endpoints
│   ├── server.js                        # Express server setup
│   ├── package.json                     # Backend dependencies
│   └── .env.example                     # Environment variables template
│
├── frondend/
│   ├── src/
│   │   ├── App.jsx                      # Main React component
│   │   ├── App.css                      # Styling for App component
│   │   ├── api.js                       # Axios API client
│   │   ├── index.css                    # Global styles
│   │   ├── main.jsx                     # React entry point
│   │   └── assets/                      # Static assets
│   ├── public/                          # Public assets
│   ├── package.json                     # Frontend dependencies
│   ├── vite.config.js                   # Vite configuration
│   └── index.html                       # HTML template
│
└── SCHEMA_AND_API_DOCS.md              # Database schema & API documentation
```

## Features

### Backend Features

- ✅ RESTful API with proper routing
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Pagination support
- ✅ Input validation
- ✅ Error handling with proper status codes
- ✅ MongoDB integration with Mongoose

### Frontend Features

- ✅ Add new employees with form validation
- ✅ View all employees in table format
- ✅ Delete employees
- ✅ Real-time list updates
- ✅ Error and success notifications
- ✅ Responsive design (desktop & mobile)
- ✅ Loading states
- ✅ Form auto-reset after submission

## Setup Instructions

### Backend Setup

1. **Install Dependencies**

   ```bash
   cd Back-end
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URL` with your MongoDB connection string

   ```bash
   cp .env.example .env
   ```

3. **Start the Server**

   ```bash
   # Development mode with hot reload
   npm run dev

   # Production mode
   npm start
   ```

The server will run on `http://localhost:5000`

### Frontend Setup

1. **Install Dependencies**

   ```bash
   cd frondend
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## API Documentation

See [SCHEMA_AND_API_DOCS.md](./SCHEMA_AND_API_DOCS.md) for detailed API documentation including:

- Request/Response formats
- Field descriptions
- Data flow diagrams
- Complete endpoint reference

## Database Schema

### Employee Collection

```
{
  _id: ObjectId,
  companyId: String (Required),
  name: String (Required),
  email: String (Required, Unique),
  department: String (Required),
  salary: Number (Required),
  createdAt: Date,
  updatedAt: Date
}
```

## Key Improvements Made

1. **Backend Flow**
   - Created proper controller with CRUD operations
   - Implemented validation for all fields
   - Added pagination support
   - Proper error handling and HTTP status codes
   - Cleaned up unnecessary route parameters (page, limit removed from schema)

2. **Frontend Flow**
   - Added complete form with validation
   - Implemented employee list display
   - Added delete functionality with confirmation
   - Real-time list updates
   - Form auto-reset after successful submission
   - Error and success message notifications

3. **Database Schema**
   - Removed unnecessary fields (createdBy, page, limit)
   - Added proper validation rules
   - Email field is unique and case-insensitive
   - Salary validation (non-negative values)
   - Automatic timestamps (createdAt, updatedAt)

4. **Styling**
   - Modern gradient design
   - Responsive grid layout
   - Clean, professional appearance
   - Smooth animations and transitions
   - Mobile-friendly responsive design
   - Proper form styling and error states

5. **Code Organization**
   - Separated concerns (controller, routes, models)
   - Clean and maintainable code structure
   - Proper naming conventions
   - Comprehensive documentation

## Running the Application

### Terminal 1 - Backend

```bash
cd Back-end
npm run dev
```

### Terminal 2 - Frontend

```bash
cd frondend
npm run dev
```

Open `http://localhost:5173` in your browser to access the application.

## Technologies Used

### Backend

- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables
- **Nodemon** - Development hot reload

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## Future Enhancements

- [ ] Authentication and authorization
- [ ] Edit employee functionality
- [ ] Search and filter capabilities
- [ ] Export to CSV/PDF
- [ ] Role-based access control
- [ ] Employee performance tracking
- [ ] Department management
- [ ] Salary history tracking

## Support

For issues or questions, please refer to the documentation files included in this project.
