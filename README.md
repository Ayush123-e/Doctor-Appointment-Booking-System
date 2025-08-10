# Doctor-Appointment-Booking-System

# Idea
An intuitive, full-stack application to facilitate seamless appointment scheduling between patients and doctors. Built with MongoDB, Express.js, React.js, Node.js, and enhanced with JWT, email notifications, and optional payment integration.
___

##  Description
This project enables users to register as a patient or doctor, manage profiles, and schedule appointments through a responsive, user-friendly interface. Administrators can oversee users and appointments. Optional features include online payments and email confirmations.
___
##  Objectives
- Enable secure, role-based user authentication (Patient, Doctor, Admin).
- Allow patients to browse doctors, book, reschedule, or cancel appointments.
- Empower doctors to set availability, view appointments, and receive notifications.
- Give administrators control over users and booking oversight.
- (Optional) Integrate email confirmations (e.g., with Nodemailer) and payment gateways (Stripe, Razorpay).

  ___

##  Tech Stack

| Layer         | Technology                        |
|---------------|-----------------------------------|
| Frontend      | React, Tailwind CSS |
| Backend       | Node.js, Express.js               |
| Authentication| JWT (token creation) using Bcrypt for password hashing,(login,sign-up google authentication )|
| Database      | MongoDB & Mongoose                |
| Notifications | Nodemailer (email) |
| Payments      | Stripe or Razorpay integration  |
| Deployment    | netlify(frontend), Render(backend)       |


##  Folder Structure
```
doctor-appointment-system/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── config/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── context/ or store/
│ │ └── App.jsx
│ └── public/
├── README.md
└── package.json

bash

