import {IFormFields} from "../types/iUser.ts";

export const getUsers = async () => {
    const request = await fetch('http://localhost:3000/users');
    return await request.json();
}

export const getUserById = async (id: string) => {
    const request = await fetch(`http://localhost:3000/users/${id}`);
    return await request.json();
}

export const createUser = async (fields: IFormFields) => {
     await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        body: JSON.stringify(fields),
    });
}

export const deleteUser = async (id: string) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
    });
}
