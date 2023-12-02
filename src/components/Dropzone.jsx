'use client'

import { addData } from '@/lib/firebase/firestore'
import { uploadImage, uploadImages } from '@/lib/firebase/storage';
import { useState, useEffect } from "react";

export default function Dropzone() {



    const [email, setEmail] = useState('');
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const handleForm = async (event) => {
        const data = {
            'email': email
        }

        if(images.length < 1) return;

        const imageURLS = await uploadImages(email, images);

        data['images'] = imageURLS;

        const { result, error } = await addData('users', 'user-id', data);

        if (error) {
            return console.log(error);
        }
        
    };




    return (
        <div className="flex items-center justify-center w-full bg-white">
            <form action={handleForm}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                </div>
                <div className='mb-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="multiple_files">Upload multiple files</label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                        id="multiple_files"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={onImageChange} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imageURLS.map((imageSrc) => (
                    <div >
                        <img className="h-auto max-w-full rounded-lg" src={imageSrc} alt="" />
                    </div>
                ))}
            </div>
            
        </div>
    );
}