# Task Management API

A RESTful API for managing tasks, built with Node.js and Express. Supports retrieving all tasks and single tasks by ID, with in-memory storage.

## Setup and Run Instructions

1. Prerequisites: Node.js (v18+ recommended).
2. Clone the repository: `git clone <your-repo-url>`
3. Navigate to the project directory: `cd task-management`
4. Install dependencies: `npm install`
5. Start the server: `npm start`
6. Open http://localhost:3000 in a browser to verify (should display "Task Management API is running!").

**Troubleshooting:** If port 3000 is in use, change `port` in `src/index.js`. Data resets on restart (in-memory).

## API Endpoints

| Method | Endpoint       | Description                              | Response Status/Body Example |
|--------|----------------|------------------------------------------|------------------------------|
| GET    | `/`            | Root endpoint (API status)               | 200: "Task Management API is running!" |
| GET    | `/tasks`       | Retrieve all tasks                       | 200: `{"success":true,"data":[...]} ` (array of 5 sample tasks) |
| GET    | `/tasks/:id`   | Retrieve a single task by ID             | 200: `{"success":true,"data":{...}}`<br>400: `{"error":"Invalid ID format"}`<br>404: `{"error":"Task not found"}` |
| GET    | `/health`      | Server health check                      | 200: `{"status":"healthy","uptime":<seconds>}` |

**Testing:** Use Postman or curl. Sample tasks include IDs 1-5 with varying priorities and completion status.

## Project Structure

- `src/index.js`: Main server file.
- `src/routes/tasks.js`: Task routes using Express Router.
- `package.json`: Dependencies and scripts.

For full CRUD, extend with POST/PUT/DELETE.
