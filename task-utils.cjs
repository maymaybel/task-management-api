
function addTask(tasks, name) {
    const value = name.trim();

    if (!value) return tasks;

    return [...tasks, {
        name: value,
        completed: false
    }];
}

function toggleTask(tasks, index) {
    return tasks.map((task, i) =>
        i === index
            ? { ...task, completed: !task.completed }
            : task
    );
}

function filterTasks(tasks, filter) {
    if (filter === "active") {
        return tasks.filter(task => !task.completed);
    }

    if (filter === "completed") {
        return tasks.filter(task => task.completed);
    }

    return tasks;
}

module.exports = {
    addTask,
    toggleTask,
    filterTasks
};
