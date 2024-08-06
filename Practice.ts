//Enums

enum Role {
    Admin,
    User,
    Guset
}

enum Status { 
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

//Tuples
let user1: [number, string, Role] = [1, "Alice", Role.Admin];
let user2: [number, string, Role] = [2, "Bob", Role.User];

// Objects

interface User {
    id: number;
    name: string;
    role: Role;
    status: Status;
    permissions: string[];
}

const users: User[] = [
        {
            id: 1,
            name: "Alice",
            role: Role.Admin,
            status: Status.Active,
            permissions: ["read", "write", "delete"]
        },
        {
            id: 2,
            name: "Bob",
            role: Role.User,
            status: Status.Pending,
            permissions: ["read"]
        }
    ];

    // Functions

 // Functions
function getUserInfo(user: User): string {
    return `User ${user.name} is a ${Role[user.role]} with status ${user.status}.`;
}

function changeUserRole(user: User, newRole: Role): void {
    user.role = newRole;
}

function activateUser(user: User): void {
    user.status = Status.Active;
}

function addPermission(user: User, permission: string): void {
    user.permissions.push(permission);
}

// Using the functions
console.log(getUserInfo(users[0])); // User Alice is a Admin with status ACTIVE.
console.log(getUserInfo(users[1])); // User Bob is a User with status PENDING.

changeUserRole(users[1], Role.Admin);
console.log(getUserInfo(users[1])); // User Bob is a Admin with status PENDING.

activateUser(users[1]);
console.log(getUserInfo(users[1])); // User Bob is a Admin with status ACTIVE.

addPermission(users[1], "write");
console.log(users[1].permissions); // ["read", "write"]

// Additional functions
function listActiveUsers(users: User[]): User[] {
    return users.filter(user => user.status === Status.Active);
}

function listUsersByRole(users: User[], role: Role): User[] {
    return users.filter(user => user.role === role);
}

// Using additional functions
console.log(listActiveUsers(users)); 
// [{ id: 1, name: "Alice", role: 0, status: "ACTIVE", permissions: ["read", "write", "delete"] },
//  { id: 2, name: "Bob", role: 0, status: "ACTIVE", permissions: ["read", "write"] }]

console.log(listUsersByRole(users, Role.Admin)); 
// [{ id: 1, name: "Alice", role: 0, status: "ACTIVE", permissions: ["read", "write", "delete"] },
//  { id: 2, name: "Bob", role: 0, status: "ACTIVE", permissions: ["read", "write"] }]

// Function to list permissions of all users
function listPermissions(users: User[]): string[] {
    const permissionsSet = new Set<string>();
    users.forEach(user => {
        user.permissions.forEach(permission => {
            permissionsSet.add(permission);
        });
    });
    return Array.from(permissionsSet);
}

// Using the listPermissions function
console.log(listPermissions(users)); // ["read", "write", "delete"]

// Function to find a user by ID
function findUserById(users: User[], id: number): User | undefined {
    return users.find(user => user.id === id);
}

// Using the findUserById function
console.log(findUserById(users, 1)); 
// { id: 1, name: "Alice", role: 0, status: "ACTIVE", permissions: ["read", "write", "delete"] }

console.log(findUserById(users, 3)); // undefined

console.log(findUserById);
