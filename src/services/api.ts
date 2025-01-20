export const getUsers = async () => {
    const request = await fetch('http://localhost:3000/users');
    console.log(request);
    return await request.json();
}
