import { useEffect } from "react";
import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {createUser, editUser} from "../services/api.ts";
import ImageUploader from "./ImageUploader.tsx";
import {IFormFields, IUser} from "../types/iUser.ts";
import {containsUrl} from "../utils/helpers.ts";

interface IContactAdditionFormProps {
    isEdit?: boolean;
    editData?: IFormFields;
    contactUuid?: string;
}

const ContactAdditionForm = ({ isEdit, editData, contactUuid } : IContactAdditionFormProps) => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (formData: never) => createUser(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })

    const editMutation = useMutation({
        mutationFn: (userData: IUser) => editUser(contactUuid as string, userData),
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
            if (isEdit) {
                editMutation.mutate(value)
            } else {
                mutation.mutate(value)
                form.reset()
            }
        }
    })

    useEffect(() => {
        if (isEdit) {
            form.reset(editData)
        }
    }, [form, isEdit, editData])

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
                    validators={{
                        onChangeAsyncDebounceMs: 500,
                        onChangeAsync: ({value}) =>
                            value.length < 3 ? 'Name should contain at least 3 characters.' : undefined,
                    }}
                    children={(field) => (
                        <>
                            <input
                                placeholder='Full Name'
                                className='w-full pl-2 pr-4 py-2 rounded-lg border-2 text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg'
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.errors ? (
                                <span role="alert" className='text-red-500'>{field.state.meta.errors.join(', ')}</span>
                            ) : null}
                        </>
                    )}
                />
                <form.Field
                    name="socialMedia"
                    validators={{
                        onChangeAsyncDebounceMs: 500,
                        onChangeAsync: ({value}) =>
                            !containsUrl(value) ? 'Please insert valid social media url' : undefined,
                    }}
                    children={(field) => (
                        <>
                            <input
                                placeholder='Social Media'
                                className='w-full pl-2 pr-4 py-2 rounded-lg border-2 text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg'
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.errors ? (
                                <span role="alert" className='text-red-500'>{field.state.meta.errors.join(', ')}</span>
                            ) : null}
                        </>
                    )}
                />
                <form.Field
                    name="description"
                    validators={{
                        onChangeAsyncDebounceMs: 500,
                        onChangeAsync: ({value}) =>
                            value.length === 0 ? 'Please provide a description' : undefined,
                    }}
                    children={(field) => (
                        <>
                            <textarea
                                placeholder='Description/Occupation'
                                className='w-full pl-2 pr-4 py-2 rounded-lg border-2 text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg'
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.errors ? (
                                <span role="alert" className='text-red-500'>{field.state.meta.errors.join(', ')}</span>
                            ) : null}
                        </>
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
