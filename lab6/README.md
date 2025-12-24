
# My Task Manager

A simple **Task Manager** backend built with **Node.js**, **Express**, **MySQL**, and **Sequelize ORM**.  
This project demonstrates the use of Sequelize for database management, replacing raw SQL queries with ORM methods for full CRUD operations.

---

## **Table of Contents**

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Technologies Used](#technologies-used)  
- [Contributing](#contributing)  

---

## **Features**

- Define Sequelize models and run migrations.  
- Full CRUD operations for tasks using ORM methods.  
- Replace raw SQL queries with cleaner, maintainable code.  
- Asynchronous database operations using `async/await`.  
- Organized folder structure for scalability.

---

## **Prerequisites**

- Node.js (v14 or higher recommended)  
- npm (Node Package Manager)  
- MySQL server  
- Basic understanding of JavaScript promises and async/await  

---

## **Installation**

1. **Clone the repository**  

```bash
git clone https://github.com/AbdurRobMridha/My-Task-Manager.git
cd My-Task-Manager
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the project root:

```env
DB_USER=root
DB_PASS=your_password
DB_NAME=task_manager_db
DB_HOST=127.0.0.1
```

4. **Initialize Sequelize and run migrations**

```bash
npx sequelize-cli db:migrate
```

---

## **Project Structure**

```
My-Task-Manager/
├─ controllers/
│   └─ taskController.js
├─ models/
│   ├─ index.js
│   └─ task.js
├─ migrations/
│   └─ <migration-files>
├─ routes/
│   └─ tasks.js
├─ lab6/                # Updated Lab6 folder
├─ db.js                # Database connection
├─ package.json
└─ README.md
```

---

## **Usage**

1. Start the server:

```bash
npm start
```

2. Test API endpoints using **Postman** or any API client.

---

## **API Endpoints**

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /tasks     | Get all tasks           |
| GET    | /tasks/:id | Get a single task by ID |
| POST   | /tasks     | Create a new task       |
| PUT    | /tasks/:id | Update a task by ID     |
| DELETE | /tasks/:id | Delete a task by ID     |

---

## **Technologies Used**

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* dotenv

---

## **Contributing**

Feel free to fork the repository, create a branch, and submit pull requests.
Please follow best practices and write meaningful commit messages.

---

## **License**

This project is licensed under the MIT License.

```

---

If you want, I can also make a **more compact, GitHub-ready version** that highlights **Lab6 specifically** for your repo, so anyone can directly see it’s Lab6 content.  

Do you want me to do that?
```
