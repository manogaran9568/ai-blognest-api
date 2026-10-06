# AI BlogNest API 🚀

A secure, scalable RESTful API built with Node.js, Express, MongoDB, and Google Gemini AI. It powers a modern blogging platform featuring automated AI blog generation, content summarization, and JWT-authenticated author workflows.

---

## 🛠️ Features

- **Authentication & Security:** User registration and login using JWT (JSON Web Tokens) and bcrypt password hashing.
- **Blog Post Management:** Complete CRUD operations (Create, Read, Update, Delete) with author ownership checks.
- **AI Blog Generation:** Automated generation of detailed blog drafts using Google's `@google/genai` SDK (`gemini-3.5-flash-lite`).
- **AI Content Summarization:** Automated multi-paragraph summarization for post previews.

---

## 📂 Project Structure

```text
ai-blognest-api/
├── src/
│   ├── config/          # Database configuration (Mongoose)
│   ├── controllers/     # Route logic (Auth, Blogs, AI)
│   ├── middleware/      # JWT auth and error handling middlewares
│   ├── models/          # Mongoose data models (User, Blog)
│   ├── routes/          # Express route definitions
│   ├── services/        # Gemini AI integration services
│   ├── app.js           # Express app setup and middleware registration
│   └── server.js        # Server listener and database bootloader
├── .env.example         # Environment template
├── .gitignore
├── package.json
└── README.md