export async  function getAllUserData() {
    const response = await fetch('http://localhost:3000/users')
    return response.json();
}
export async function createUser(newUser) {
    const response = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    return response.json();
}
export async function updatedUser(updatedUser) {
    const response = await fetch(`http://localhost:3000/Users/${updatedUser.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });
    return response.json();
}
export async function getUserById(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`)
    return response.json();
}
export async function deleteUser(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
})
    return response.json();
}