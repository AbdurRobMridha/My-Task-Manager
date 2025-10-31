# My-Task-Manager

A simple Node.js Express application to manage tasks with basic REST API endpoints.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/AbdurRobMridha/My-Task-Manager.git
cd My-Task-Manager/task-management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node src/index.js
```

The server runs on `http://localhost:3000`

## API Endpoints

| Method | Endpoint     | Description                                                                                     |
| ------ | ------------ | ----------------------------------------------------------------------------------------------- |
| GET    | `/`          | Root endpoint, can return a welcome message or redirect.                                        |
| GET    | `/tasks`     | Returns a list of all tasks. Each task has `id`, `title`, `completed`, `priority`, `createdAt`. |
| GET    | `/tasks/:id` | Returns a single task by `id`. Returns 404 if not found or 400 if `id` is invalid.              |
| GET    | `/health`    | Returns server health status with uptime.                                                       |

## Testing

You can test the API using Postman or curl. Example with curl:

* Get all tasks:

```bash
curl http://localhost:3000/tasks
```

* Get single task:

```bash
curl http://localhost:3000/tasks/2
```

* Test invalid ID:

```bash
curl http://localhost:3000/tasks/abc
```

* Check health:

```bash
curl http://localhost:3000/health
```

## Notes

* Make sure Node.js is installed on your machine.
* The server must be running to test endpoints.
* All IDs must be numeric; invalid IDs return a 400 error.
* For detailed API responses, see `api-responses.txt` in the project root.
