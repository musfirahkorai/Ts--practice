// Enums
enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}

enum Status {
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
}

// Interfaces
interface Task {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    dueDate: Date;
}

interface User {
    id: number;
    name: string;
    email: string;
    tasks: number[]; // Task IDs
}

interface TaskManager {
    tasks: Task[];
    users: User[];
}

// Objects
const taskManager: TaskManager = {
    tasks: [],
    users: []
};

// Functions
function addTask(manager: TaskManager, task: Task): void {
    manager.tasks.push(task);
}

function addUser(manager: TaskManager, user: User): void {
    manager.users.push(user);
}

function getTasksByStatus(manager: TaskManager, status: Status): Task[] {
    return manager.tasks.filter(task => task.status === status);
}

function getTasksByPriority(manager: TaskManager, priority: Priority): Task[] {
    return manager.tasks.filter(task => task.priority === priority);
}

function findTaskById(manager: TaskManager, taskId: number): Task | undefined {
    return manager.tasks.find(task => task.id === taskId);
}

function findUserById(manager: TaskManager, userId: number): User | undefined {
    return manager.users.find(user => user.id === userId);
}

function assignTaskToUser(manager: TaskManager, taskId: number, userId: number): void {
    const task = findTaskById(manager, taskId);
    const user = findUserById(manager, userId);
    if (task && user) {
        user.tasks.push(taskId);
    }
}

function completeTask(manager: TaskManager, taskId: number): void {
    const task = findTaskById(manager, taskId);
    if (task) {
        task.status = Status.Done;
    }
}

// Adding users
addUser(taskManager, { id: 1, name: "Alice", email: "alice@example.com", tasks: [] });
addUser(taskManager, { id: 2, name: "Bob", email: "bob@example.com", tasks: [] });

// Adding tasks
addTask(taskManager, { id: 1, title: "Design the homepage", description: "Create a new design for the homepage.", priority: Priority.High, status: Status.ToDo, dueDate: new Date("2024-08-01") });
addTask(taskManager, { id: 2, title: "Write API documentation", description: "Document the new API endpoints.", priority: Priority.Medium, status: Status.InProgress, dueDate: new Date("2024-08-10") });
addTask(taskManager, { id: 3, title: "Fix bugs", description: "Resolve the bugs reported in the last release.", priority: Priority.Low, status: Status.ToDo, dueDate: new Date("2024-08-15") });

// Using functions
console.log("Tasks with High priority:");
console.log(getTasksByPriority(taskManager, Priority.High));

console.log("Tasks that are To Do:");
console.log(getTasksByStatus(taskManager, Status.ToDo));

console.log("Details of task with ID 2:");
console.log(findTaskById(taskManager, 2));

console.log("Details of user with ID 1:");
console.log(findUserById(taskManager, 1));

// Assigning tasks to users
assignTaskToUser(taskManager, 1, 1); // Assign "Design the homepage" to Alice
assignTaskToUser(taskManager, 2, 2); // Assign "Write API documentation" to Bob

console.log("Tasks assigned to Alice:");
console.log(findUserById(taskManager, 1)?.tasks);

console.log("Tasks assigned to Bob:");
console.log(findUserById(taskManager, 2)?.tasks);

// Completing a task
completeTask(taskManager, 1); // Mark "Design the homepage" as Done

console.log("Updated task with ID 1:");
console.log(findTaskById(taskManager, 1));

// Additional functionality
function listAllTasks(manager: TaskManager): Task[] {
    return manager.tasks;
}

function listAllUsers(manager: TaskManager): User[] {
    return manager.users;
}

// Using additional functionality`
console.log("All tasks in the task manager:");
console.log(listAllTasks(taskManager));

console.log("All users in the task manager:");
console.log(listAllUsers(taskManager));
