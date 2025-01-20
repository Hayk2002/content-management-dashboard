import { useCallback, useState } from "react"

import { IUser } from "../types/iUser.ts"

export const useSearch = (users: IUser[]) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleSearch = useCallback(() => {
        return users?.filter((user: IUser) => {
            const userName = user.name
            if (inputValue === "") return user

            return userName.toLowerCase().includes(inputValue.toLowerCase())
        });
    }, [inputValue, users])

    return { setInputValue, inputValue, handleSearch }
}
