import React from "react";
import { useDropzone } from "react-dropzone"
import axios from "axios"
import { toast } from "react-toastify";


const FileUpload = ({ onFileUploaded }) => {
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);

        axios
            .post('http://localhost:5000/api/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((response) => {
                console.log('File uploaded successfully',response);
                onFileUploaded(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // Server responded with a status code out of 2xx
                    toast.error('Server Error:', error.response.data);
                } else if (error.request) {
                    // Request was made but no response received
                    toast.error('No Response:', error.request);
                } else {
                    // Something else happened
                    toast.error('Error:', error.message);
                }
            });

    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.pdf,.txt,.docx', // Acceptable file types
    });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag & drop a file, or click to select one</p>
        </div>
    )

}

export default FileUpload;
