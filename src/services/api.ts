export const getUsers = async () => {
    const request = await fetch('http://localhost:3000/users');
    return await request.json();
}

export const getUserById = async (id: string) => {
    const request = await fetch(`http://localhost:3000/users/${id}`);
    return await request.json();
}
