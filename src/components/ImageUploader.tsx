import React, { useState } from "react";

const ImageUploader = ({ field }) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setImagePreview(objectUrl);
            field.handleChange(file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <label
                htmlFor="imageUpload"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
            >
                <div className="flex flex-col items-center justify-center">
                    {!imagePreview ? (
                        <>
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16l-4-4m0 0l4-4m-4 4h18M13 16l4-4m0 0l-4-4m4 4H3"
                                />
                            </svg>
                            <p className="text-sm text-gray-500">
                                <span className="font-medium">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                        </>
                    ) : (
                        <img
                            src={imagePreview}
                            alt="Uploaded preview"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    )}
                </div>
                <input
                    id="imageUpload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={handleImageChange}
                />
            </label>
        </div>
    );
};


export default ImageUploader;
