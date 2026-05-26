# ANSWERS.md

---

## 1. How to run the project

To run this project on a fresh machine:

### Prerequisites:
- Node.js (v18 or higher)
- npm

### Steps:

1. Install dependencies:
```bash
npm install
```

2. Start the Dev Server, run the given comand in the terminal
```bash
npm run dev
```
3. Open the given URL in the Browser
```bash
http://localhost:3000
```

---

## 2. Stack Choice

Why did you choose this stack (Node.js, Express, frontend)?

Answer:
It was a simple project and it does not require havey frameworks like react and next js. So I used these.
And I was only familiar with this stack.

---

## 3. One Real Edge Case Handled
One important edge case handled in this project is when a GitHub username does not exist (404 response from GitHub API).

Where it is handled:
File: services/githubApi.js
What happens:

If the GitHub API returns a 404 status, the backend throws a controlled error:

```bash
GitHub user not found
```
This is then sent to the frontend and displayed as a user-friendly message instead of crashing or showing raw API errors.

Without this handling:

The application would either:

crash on invalid usernames
or display confusing API error responses to the user
---

## 4. AI Usage

Tool used:
I Used Chatgpt.

What you asked:
I asked it to give me file and flder structure and help me in setting up project. Also I asked it to write me a basic frontend (html-css) code.
I also asked for solving syntaxual errors. 
AI gave me CommonJS structure but I changed it module version.
I Asked how to fetch GitHub API data properly in Node.js
I Asked how to handle 404, 403, and network errors cleanly
I asked it to add input validation before making API requests
I ased it to improve UI structure into a card-based layout instead of raw text outputI

---

## 5. Honest Gap / Limitation

What is one thing not good enough in your project?
I think website is not responsiveness. so i would work on it to make responsive.
Also I did not know much about frontend. I struggle with it and I dont know much how to make this look good. so I hope to work on it and improve my frontend skills as well.

---
# END