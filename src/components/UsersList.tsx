import { useQuery } from "@tanstack/react-query";
import { useParams } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";

import { getUsers } from "../services/api.ts";
import { IUser } from "../types/iUser.ts";

const UsersList = () => {
    const contactUuid = useParams({
        from: '/contacts/$contactUuid',
        select: (params) => params.contactUuid,
    })

    const { isPending, isError, data, error } = useQuery({ queryKey: ['users'], queryFn: getUsers })

    if (isPending) return 'Fetching users...'

    if (isError) return 'An error occurred: ' + error

    return (
        <div className='p-8 grid gap-1'>
            {data.map((user: IUser) => (
                <Link
                    key={user.id}
                    to={`/contacts/${user.id}` as string}
                    className={`p-2 rounded-md w-full  hover:bg-active-blue hover:text-white ${contactUuid === user.id && 'bg-active-blue text-white'}`}
                >
                    {user.name}
                </Link>
            ))}
        </div>
    )
}

export default UsersList
