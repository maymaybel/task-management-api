
const test = require("node:test");
const assert = require("node:assert");
const {
    addTask,
    toggleTask,
    filterTasks
} = require("./task-utils.cjs");

test("TC-01: Add a new task", () => {
    const result = addTask([], "Study JavaScript");
    assert.equal(result.length, 1);
    assert.equal(result[0].name, "Study JavaScript");
});

test("TC-02: Complete a task", () => {
    const tasks = [{ name: "Study", completed: false }];
    const result = toggleTask(tasks, 0);
    assert.equal(result[0].completed, true);
});

test("TC-03: Reject an empty task", () => {
    const result = addTask([], "   ");
    assert.equal(result.length, 0);
});

test("TC-04: Filter active tasks", () => {
    const tasks = [
        { name: "A", completed: false },
        { name: "B", completed: true }
    ];
    assert.equal(filterTasks(tasks, "active").length, 1);
});

test("TC-05: Filter completed tasks", () => {
    const tasks = [
        { name: "A", completed: false },
        { name: "B", completed: true }
    ];
    assert.equal(filterTasks(tasks, "completed").length, 1);
});
