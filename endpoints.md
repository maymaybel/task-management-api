
# Task Management API - Endpoints Documentation

## 1. Users Resource

### GET /users
Description: Get all users.
Success Status Code: 200 OK

### GET /users/{id}
Description: Get a user by ID.
Success Status Code: 200 OK
Error Status Code: 404 Not Found

### POST /users
Description: Create a new user.
Request Body:
- name
- email

Success Status Code: 201 Created
Error Status Code: 400 Bad Request

### PUT /users/{id}
Description: Update an existing user.
Request Body:
- name
- email

Success Status Code: 200 OK
Error Status Code: 404 Not Found

### DELETE /users/{id}
Description: Delete a user.
Success Status Code: 204 No Content
Error Status Code: 404 Not Found

---

## 2. Tasks Resource

### GET /tasks
Description: Get all tasks.
Success Status Code: 200 OK

### GET /tasks/{id}
Description: Get a task by ID.
Success Status Code: 200 OK
Error Status Code: 404 Not Found

### POST /tasks
Description: Create a new task.
Request Body:
- title
- description
- status
- userId

Success Status Code: 201 Created
Error Status Code: 400 Bad Request

### PUT /tasks/{id}
Description: Update an existing task.
Request Body:
- title
- description
- status

Success Status Code: 200 OK
Error Status Code: 404 Not Found

### DELETE /tasks/{id}
Description: Delete a task.
Success Status Code: 204 No Content
Error Status Code: 404 Not Found
