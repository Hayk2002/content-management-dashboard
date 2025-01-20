import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { IUser } from "../types/iUser.ts";
import SearchBox from "./SearchBox.tsx";
import { useSearch } from "../hooks/useSearch.tsx";
import { useGetUsersQuery } from "../hooks/useGetUsersQuery.tsx";

const UsersList = () => {
    const { isPending, isError, data, error } = useGetUsersQuery()

    const { setInputValue, inputValue, handleSearch } = useSearch(data)

    const [dataSource, setDataSource] = useState<IUser[]>([])

    useEffect(() => {
        const filteredData = handleSearch()

        if (filteredData) {
            setDataSource(filteredData)
        }
    }, [handleSearch, inputValue])

    if (isPending) return 'Fetching users...'

    if (isError) return 'An error occurred: ' + error

    return (
        <>
            <SearchBox setInputValue={setInputValue}/>
            <div className='p-8 grid gap-1'>
                {dataSource.length ? dataSource.map((user: IUser) => (
                    <Link
                        activeProps={{
                            className: 'bg-active-blue text-white'
                        }}
                        key={user.id}
                        to={`/contacts/${user.id}` as string}
                        className={'p-2 rounded-md w-full  hover:bg-active-blue hover:text-white'}
                    >
                        {user.name}
                    </Link>
                )) : 'no contacts were found'}
            </div>
        </>
    )
}

export default UsersList
