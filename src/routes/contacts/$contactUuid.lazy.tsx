import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from '@tanstack/react-router'

import { getUserById } from "../../services/api.ts";

export const Route = createLazyFileRoute('/contacts/$contactUuid')({
  component: Contact,
})

function Contact() {
    const { contactUuid } = Route.useParams()
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['user', contactUuid],
        queryFn: async () => await getUserById(contactUuid)
    })

    if (isPending) return 'Fetching user...'

    if (isError) return 'An error occurred: ' + error

    return data ? (
        <div className="flex items-center p-4 space-x-4 max-w-md">
            <img
                src={data.image}
                alt="Profile"
                className="w-40 h-50 rounded-lg object-cover"
            />

            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <button className="text-gray-400 hover:text-yellow-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.973 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.973-2.888a1 1 0 00-1.176 0l-3.973 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.101c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
                            />
                        </svg>
                    </button>
                </div>
                <a href={data.socialMedia} target='_blank' className="text-blue-500">{data.socialMedia}</a>
                <p className="text-gray-500">{data.description}</p>
                <div className="flex space-x-2 mt-2">
                    <button
                        className="pl-4 pr-4 py-2 rounded-md border-2 border-gray-100 bg-white text-blue-500 shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200">
                        Edit
                    </button>
                    <button className="pl-4 pr-4 py-2 rounded-md border-2 border-gray-100 bg-white text-red-500 shadow-md hover:bg-red-500 hover:text-white transition-all duration-200">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    ) : 'No User Data'
}
