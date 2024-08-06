//Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guset"] = 2] = "Guset";
})(Role || (Role = {}));
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
//Tuples
var user1 = [1, "Alice", Role.Admin];
var user2 = [2, "Bob", Role.User];
var users = [
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
function getUserInfo(user) {
    return "User ".concat(user.name, " is a ").concat(Role[user.role], " with status ").concat(user.status, ".");
}
function changeUserRole(user, newRole) {
    user.role = newRole;
}
function activateUser(user) {
    user.status = Status.Active;
}
function addPermission(user, permission) {
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
function listActiveUsers(users) {
    return users.filter(function (user) { return user.status === Status.Active; });
}
function listUsersByRole(users, role) {
    return users.filter(function (user) { return user.role === role; });
}
// Using additional functions
console.log(listActiveUsers(users));
// [{ id: 1, name: "Alice", role: 0, status: "ACTIVE", permissions: ["read", "write", "delete"] },
//  { id: 2, name: "Bob", role: 0, status: "ACTIVE", permissions: ["read", "write"] }]
console.log(listUsersByRole(users, Role.Admin));
// [{ id: 1, name: "Alice", role: 0, status: "ACTIVE", permissions: ["read", "write", "delete"] },
//  { id: 2, name: "Bob", role: 0, status: "ACTIVE", permissions: ["read", "write"] }]
// Function to list permissions of all users
function listPermissions(users) {
    var permissionsSet = new Set();
    users.forEach(function (user) {
        user.permissions.forEach(function (permission) {
            permissionsSet.add(permission);
        });
    });
    return Array.from(permissionsSet);
}
// Using the listPermissions function
console.log(listPermissions(users)); // ["read", "write", "delete"]
// Function to find a user by ID
function findUserById(users, id) {
    return users.find(function (user) { return user.id === id; });
}
// Using the findUserById function
console.log(findUserById(users, 1));
// { id: 1, name: "Alice", role: 0, status: "ACTIVE", permissions: ["read", "write", "delete"] }
console.log(findUserById(users, 3)); // undefined
console.log(findUserById);
