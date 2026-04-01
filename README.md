# Shipment_Tracking_System

A full-stack logistics shipment tracking system built using **MERN Stack (MongoDB, Express, React, Node.js)**.  
This system allows admins to manage shipments and users to track them in real-time.

---

## Live Demo

-  Frontend (Vercel): https://sts-liard.vercel.app/
-  Backend (Vercel): https://shipback.vercel.app/

---

## Project Overview

This project is designed to simulate a real-world logistics system where:

- Admin can create and manage shipments  
- Users can track shipments using a tracking ID   
- Shipment status updates dynamically 
- History of shipment movements is stored 

---

## Features

### Admin Features
- Admin Login (JWT Authentication)
- Create Shipment
- Dashboard with DataGrid
- Update Shipment Status (Pending / In Transit / Delivered)
- Shipment History (Timeline view)
- Search & Filter shipments

### User Features
- Track shipment using Tracking ID
- View shipment status & journey

---

## Tech Stack

### Frontend
- React.js
- Material UI (MUI)
- Redux Toolkit
- React Router DOM
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt.js

---

## Folder Structure

project-root/
│
├── frontend/ # React Frontend
│
└── backend/ # Node + Express Backend



---

## ⚙️ How It Works

###  Workflow

1. Admin logs in 
2. Admin creates a shipment  
3. System generates a unique tracking ID  
4. Admin updates shipment status over time  
5. User enters tracking ID to check status 
6. System shows current status + history  

---

##  Authentication

- JWT-based authentication  
- Protected routes for admin dashboard  
- Token stored in localStorage  

---

##  API Endpoints

###  Auth Routes
- `POST /api/auth/login` → Admin login

### 📦 Shipment Routes
- `POST /api/shipments` → Create shipment  
- `GET /api/shipments` → Get all shipments (Admin)  
- `GET /api/shipments/:trackingId` → Track shipment  
- `PUT /api/shipments/:id` → Update status  

---

##  Running Locally

### 🔹 1. Clone Repository

```bash
git clone https://github.com/sanjeetk5/Shipment_Tracking_System.git
cd Shipment_Tracking_System
```
##  Backend Setup 
cd backend
npm install

1. Create .env file

```bash
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

2.  Run Backend

```
npm run dev
```

## Frontend Setup

```
cd frontend
npm install
npm start
```


