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