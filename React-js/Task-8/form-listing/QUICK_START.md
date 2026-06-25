# Quick Start Commands Reference

## 🚀 Quick Start (Copy-Paste)

### Terminal 1: Backend Setup & Run

```bash
cd Backend
npm install
npm run dev
```

Expected output: `Server is running on http://localhost:5000`

### Terminal 2: MongoDB (if local)

#### Windows (PowerShell)

```powershell
# Run as Administrator
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```

#### Alternative: Skip if using MongoDB Atlas

Just update `.env` with Atlas connection string

### Terminal 3: Frontend Setup & Run

```bash
cd Frondend
npm install
npm run dev
```

Expected output: `Local: http://localhost:5173`

---

## 📋 Commonly Used Commands

### Backend Commands

| Command       | Purpose                          |
| ------------- | -------------------------------- |
| `npm install` | Install dependencies             |
| `npm run dev` | Start with auto-reload (nodemon) |
| `npm start`   | Start without auto-reload        |
| `npm list`    | Show installed packages          |

### Frontend Commands

| Command           | Purpose                  |
| ----------------- | ------------------------ |
| `npm install`     | Install dependencies     |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Check code quality       |

### MongoDB Compass

1. **Connect:**
   - Open MongoDB Compass
   - Connection: `mongodb://localhost:27017`
   - Click Connect

2. **View Data:**
   - Databases → `form-listing`
   - Collections → `forms`
   - View all documents

3. **Test Delete:**
   - Select document → Delete

---

## 🔧 Port Configuration

| Service  | Default Port | File                       |
| -------- | ------------ | -------------------------- |
| Backend  | 5000         | `Backend/.env` (PORT=5000) |
| Frontend | 5173         | Auto-selected by Vite      |
| MongoDB  | 27017        | Local default              |

**To change backend port:**

1. Edit `Backend/.env`
2. Change `PORT=5000` to desired port
3. Restart backend
4. Update frontend if port changed

---

## 🐛 Troubleshooting Commands

### Check if ports are in use

```bash
# Windows - Find process on port 5000
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess

# Kill process on port 5000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force
```

### Check Node version

```bash
node --version
npm --version
```

### Clear node_modules and reinstall

```bash
# Backend
cd Backend
rm -r node_modules package-lock.json
npm install
```

```bash
# Frontend
cd Frondend
rm -r node_modules package-lock.json
npm install
```

### Test backend health

```bash
# In browser or terminal
curl http://localhost:5000/api/health
```

Expected response:

```json
{ "message": "Server is running" }
```

### View MongoDB data via terminal

```bash
# Connect to MongoDB
mongosh

# Show databases
show databases

# Use database
use form-listing

# Show collections
show collections

# View all forms
db.forms.find()

# View specific form
db.forms.findOne()

# Count forms
db.forms.countDocuments()

# Delete a form
db.forms.deleteOne({ _id: ObjectId("...") })
```

---

## 📁 File Structure Quick Reference

```
Backend/
├── server.js ..................... Main server entry point
├── package.json .................. Dependencies
├── .env .......................... Configuration
├── controllers/
│   └── formController.js ......... API logic
├── models/
│   └── Form.js ................... Database schema
└── routes/
    └── formRoutes.js ............. API endpoints

Frondend/
├── src/
│   ├── App.jsx ................... Main component
│   ├── main.jsx .................. React entry
│   ├── components/
│   │   ├── FormComponent.jsx ..... Form input
│   │   └── ListComponent.jsx ..... Form display
│   └── services/
│       └── api.js ................ API calls
├── package.json .................. Dependencies
└── vite.config.js ................ Build config
```

---

## 🌐 API Endpoints Quick Reference

### Create Form

```bash
curl -X POST http://localhost:5000/api/forms \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "message": "Hello"
  }'
```

### Get All Forms

```bash
curl http://localhost:5000/api/forms
```

### Get Form by ID

```bash
curl http://localhost:5000/api/forms/FORM_ID
```

### Update Form

```bash
curl -X PUT http://localhost:5000/api/forms/FORM_ID \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@example.com",
    "phone": "098-765-4321",
    "message": "Updated"
  }'
```

### Delete Form

```bash
curl -X DELETE http://localhost:5000/api/forms/FORM_ID
```

---

## 🔑 Key File Contents Reference

### FormComponent.jsx (Main Points)

- `useState` for form state
- `handleChange` for input updates
- `handleSubmit` for form submission
- Calls `createForm()` from api.js
- Shows success/error messages
- Clears form on success

### ListComponent.jsx (Main Points)

- `useEffect` to fetch data
- Watches `refreshTrigger` prop
- `fetchForms()` gets data from backend
- Maps through forms array
- Inline edit with edit buttons
- Delete with confirmation

### formController.js (Main Points)

- `createForm`: Validate and save
- `getAllForms`: Query all from DB
- `getFormById`: Query one by ID
- `updateForm`: Update by ID
- `deleteForm`: Delete by ID
- All wrapped in try-catch

### Form.js (Main Points)

- Defines schema fields
- Sets validation rules
- required: true makes field mandatory
- trim: true removes whitespace
- timestamps auto-add createdAt

---

## 💡 Common Issues & Solutions

### "Cannot GET /api/forms"

**Cause:** Backend not running or wrong URL
**Fix:**

```bash
cd Backend
npm run dev
```

### "Network Error" in browser

**Cause:** Backend not accessible
**Fix:**

- Ensure backend running on port 5000
- Check CORS enabled in server.js
- Check firewall settings

### "MongoNetworkError"

**Cause:** MongoDB not running
**Fix:**

```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community
```

### "Cannot find module 'express'"

**Cause:** Dependencies not installed
**Fix:**

```bash
npm install
```

### Port already in use

**Cause:** Process already using that port
**Fix:**

```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force
```

### Form not submitting

**Cause:** Validation failing
**Fix:**

- Fill all fields
- Check browser console for errors
- Verify backend is running

---

## 📊 Expected File Sizes

```
Backend/
├── server.js ......................... ~40 lines
├── controllers/formController.js ..... ~80 lines
├── models/Form.js ................... ~35 lines
└── routes/formRoutes.js ............. ~20 lines

Frontend/
├── App.jsx .......................... ~30 lines
├── components/FormComponent.jsx ..... ~100 lines
├── components/ListComponent.jsx ..... ~150 lines
└── services/api.js .................. ~60 lines
```

---

## ✅ Checklist

- [ ] Install MongoDB
- [ ] Install Node.js v18+
- [ ] Backend folder has all files
- [ ] Frontend folder has components
- [ ] `.env` file configured
- [ ] Backend starts without errors
- [ ] Frontend loads in browser
- [ ] Can submit form
- [ ] Data appears in list
- [ ] Can edit and delete entries

---

## 🎯 Next Steps After Setup

1. **Test the app:**
   - Submit a form
   - Check data in MongoDB Compass
   - Edit an entry
   - Delete an entry

2. **Understand the code:**
   - Read through FormComponent.jsx
   - Read through ListComponent.jsx
   - Read through formController.js

3. **Modify the app:**
   - Add new fields (address, city, etc.)
   - Add search/filter functionality
   - Customize styling
   - Add sorting options

4. **Learn more:**
   - Read SETUP_GUIDE.md
   - Read ARCHITECTURE.md
   - Read CONCEPTS_AND_QA.md

---

## 📞 Support

If stuck:

1. Check the troubleshooting section
2. Check browser console (F12)
3. Check network tab in DevTools
4. Check backend logs in terminal
5. Read the documentation files
