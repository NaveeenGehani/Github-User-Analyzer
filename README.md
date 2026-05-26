# GitHub User Analyzer

A full-stack web application that consumes the GitHub Public API and allows users to search for GitHub profiles and view structured user information in a clean and readable interface.

This project replaces raw API responses with a user-friendly dashboard-style UI.

---

# Features

- Search any GitHub user by username
- Displays:
  - Profile avatar
  - Name and GitHub username
  - Followers count
  - Following count
  - Public repositories count
  - Direct link to GitHub profile
- Input validation (prevents empty or invalid inputs)
- Handles GitHub API errors (404, 403, etc.)
- Handles network failures gracefully
- Loading state while fetching data
- Clean and simple card-based UI design

---

# Tech Stack

Frontend:
- HTML
- CSS
- JavaScript (Vanilla)

Backend:
- Node.js
- Express.js

API:
- GitHub REST API (Public API)

---

# Project Structure

```bash
github-user/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── services/
│   └── githubApi.js
│
├── server.js
├── package.json
├── README.md
└── ANSWERS.md
```
---

# How to Run the Project

## Step 1: Install Node.js
Make sure Node.js is installed (recommended v18+)

Check:
node -v
npm -v

---

## Step 2: Install dependencies
Run the following command in project folder:

npm install

---

## Step 3: Start the server

npm run dev

---

## Step 4: Open the application

Open your browser and go to:

http://localhost:3000

---

# API Used

GitHub Public Users API:

https://api.github.com/users/{username}

Example:

https://api.github.com/users/torvalds

No API key is required.

---

# Error Handling

This project handles:

- Empty input validation
- Invalid username format
- GitHub user not found (404)
- GitHub API rate limiting (403)
- Network errors
- Slow API responses (handled using loading state)

---
