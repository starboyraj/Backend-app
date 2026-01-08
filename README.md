# Backend Fundamentals (Node.js + Express + MongoDB)

This repository is built **step by step** to understand backend **from fundamentals**, not copy–paste.
Each layer has a clear role and reason.

---

## 🧠 Goal of This Project

* Understand **how backend works internally**
* Learn **why each line is written**, not just what it does
* Build strong fundamentals for **backend interviews & real projects**

---

## 🛠️ Tech Stack (So Far)

* **Node.js** – runtime
* **Express.js** – server & routing
* **MongoDB (local)** – database
* **Mongoose** – MongoDB ODM

---

## 📂 Project Structure (Current)

```
backend/
│
├── index.js              # Server entry point
│
├── config/
│   └── db.js             # MongoDB connection logic
│
├── routes/
│   └── userRoutes.js     # Route definitions (URL layer)
│
├── controllers/
│   └── userController.js # Business logic layer
│
├── models/
│   └── User.js           # Data blueprint (schema)
│
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 🔁 Backend Request Flow (MOST IMPORTANT)

```
Client (Browser / Postman)
        ↓
index.js (Server starts)
        ↓
Route (URL match)
        ↓
Controller (Logic)
        ↓
Model (Rules / Schema)
        ↓
MongoDB (Data stored)
        ↓
Response sent back
```

If this flow is clear → backend is clear.

---

## 🚀 Step-by-Step Explanation

---

### STEP 1️⃣ Server (`index.js`)

**Role:**

* Starts the backend server
* Listens for incoming requests
* Attaches middleware & routes

**Key Concepts:**

* Express app = complete server
* `express.json()` allows server to read JSON
* `app.listen()` opens a port (gate)

---

### STEP 2️⃣ Routes (`routes/userRoutes.js`)

**Role:**

* Matches URL paths
* Forwards request to controller

**Important Rules:**

* Routes do **NOT** contain logic
* Routes only decide **where request goes**

Example:

```
GET /api/users/test
```

---

### STEP 3️⃣ Controllers (`controllers/userController.js`)

**Role:**

* Handles **logic & decisions**

Controller is responsible for:

* Validation
* Database calls
* Security checks
* Sending response

**Analogy:**

* Route = Counter
* Controller = Kitchen

---

### STEP 4️⃣ Database Connection (`config/db.js`)

**Role:**

* Connect backend to MongoDB
* Runs when server starts

**Connection String (Local MongoDB):**

```
mongodb://127.0.0.1:27017/testdb
```

**Meaning:**

* `mongodb://` → MongoDB protocol
* `127.0.0.1` → Local machine
* `27017` → MongoDB default port
* `testdb` → Database name (custom)

---

### STEP 5️⃣ Model (`models/User.js`)

**Role:**

* Defines data structure (blueprint)
* Enforces rules on database data

**Why Models Matter:**

* Prevent random data
* Apply validation
* Avoid duplicates

**User Model Fields:**

* name (required)
* email (required, unique)
* password (required)

---

## 🧠 Key Learnings Till Now

* Backend works in **layers**
* Each file has **only one responsibility**
* Logic lives in controllers
* Data rules live in models
* Server never talks directly to database

---

## 🎯 Interview-Ready Lines

> "Routes handle endpoints, controllers manage business logic, models define data structure, and MongoDB stores the data."

> "Backend follows a clean MVC-like structure with proper separation of concerns."

---

## ⏭️ Upcoming Steps

* User Registration (Signup flow)
* Password hashing
* Login API
* JWT Authentication
* Auth Middleware
* Protected Routes

---

## 📌 Mindset Note

This project is built with a **flow-first approach**:

> Understand → Explain → Then Code

Not copy–paste.

---

### ✅ Status: Fundamentals Completed (Server → Routes → Controller → DB → Model)

Next focus: **Authentication Flow** 🚀
