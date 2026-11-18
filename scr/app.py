
from flask import Flask, request, jsonify

app = Flask(__name__)

users = []
tasks = []

@app.route("/")
def home():
    return jsonify({"message": "Task Management API is running"})

@app.route("/users", methods=["GET", "POST"])
def manage_users():
    if request.method == "POST":
        user = request.json
        user["id"] = len(users) + 1
        users.append(user)
        return jsonify(user), 201

    return jsonify(users), 200

@app.route("/users/<int:user_id>", methods=["GET", "PUT", "DELETE"])
def user_detail(user_id):
    user = next((u for u in users if u["id"] == user_id), None)

    if not user:
        return jsonify({"error": "User not found"}), 404

    if request.method == "GET":
        return jsonify(user), 200

    if request.method == "PUT":
        user.update(request.json)
        return jsonify(user), 200

    users.remove(user)
    return "", 204

@app.route("/tasks", methods=["GET", "POST"])
def manage_tasks():
    if request.method == "POST":
        task = request.json
        task["id"] = len(tasks) + 1
        tasks.append(task)
        return jsonify(task), 201

    return jsonify(tasks), 200

@app.route("/tasks/<int:task_id>", methods=["GET", "PUT", "DELETE"])
def task_detail(task_id):
    task = next((t for t in tasks if t["id"] == task_id), None)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    if request.method == "GET":
        return jsonify(task), 200

    if request.method == "PUT":
        task.update(request.json)
        return jsonify(task), 200

    tasks.remove(task)
    return "", 204

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
