import { useQuery } from "@tanstack/react-query";

import { getUserById } from "../services/api.ts";

export const useGetUserByIdQuery = (contactUuid: string) => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['user', contactUuid],
        queryFn: async () => await getUserById(contactUuid),
    })

    return { isPending, isError, data, error }
}
