import { useForm } from "@tanstack/react-form";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUser } from "../services/api.ts";
import ImageUploader from "./ImageUploader.tsx";

// Define the validation schema using Yup
const schema = yup.object({
    image: yup
        .string()
        .url("Please enter a valid URL")
        .required("Image URL is required"),
    name: yup
        .string()
        .min(2, "Name must be at least 2 characters long")
        .required("Name is required"),
    socialMedia: yup.string().required("Social Media handle is required"),
    description: yup
        .string()
        .min(10, "Description must be at least 10 characters long")
        .required("Description is required"),
});

const ContactAdditionForm = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (formData: never) => createUser(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })

    const form = useForm({
        defaultValues: {
            image: "",
            name: "",
            socialMedia: "",
            description: "",
        },
        onSubmit: async ({ value }) => {
            // Do something with form data
            mutation.mutate(value)
            console.log(value)
        },
    })

    return (
        <div className="w-6/12 mx-auto mt-20">
            <h1 className='text-center mb-5 font-medium text-xl'>Add contact</h1>
            <form
                className="grid gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <form.Field
                    name="image"
                    children={(field) => <ImageUploader field={field} />}
                />
                <form.Field
                    name="name"
                    children={(field) => (
                        <input
                            placeholder='Full Name'
                            className='w-full pl-2 pr-4 py-2 rounded-lg border-2 text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg'
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <form.Field
                    name="socialMedia"
                    children={(field) => (
                        <input
                            placeholder='Social Media'
                            className='w-full pl-2 pr-4 py-2 rounded-lg border-2 text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg'
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <form.Field
                    name="description"
                    children={(field) => (
                        <textarea
                            placeholder='Description/Occupation'
                            className='w-full pl-2 pr-4 py-2 rounded-lg border-2 text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg'
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <button
                    type="submit"
                    className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105"
                >
                    Submit
                </button>
            </form>
        </div>
    )
};

export default ContactAdditionForm;
