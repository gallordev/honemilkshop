'use client'

import { addData } from '@/lib/firebase/firestore'
import { uploadImage } from '@/lib/firebase/storage';
import { useState } from "react";

export default function Dropzone() {

    async function handleRestaurantImage(target) {
        const image = target.files ? target.files[0] : null;
        if (!image) {
          return;
        }
    
        const imageURL = await uploadImage(id, image);
        setRestaurant({ ...restaurant, photo: imageURL });
      }

    const [email, setEmail] = useState('');

    const handleForm = async (event) => {
        const data = {
            'email': email
        }
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
                    <label className="block mb-2 text-sm font-medium text-gray-900" for="multiple_files">Upload multiple files</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="multiple_files" type="file" multiple />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>






            {/* <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label> */}
        </div>
    );
}