import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../services/api.ts";

export const useGetUsersQuery = () => {
    const { isPending, isError, data, error } = useQuery({ queryKey: ['users'], queryFn: getUsers })

    return { isPending, isError, data, error }
}
