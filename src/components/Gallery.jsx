'use client'

import { useState, useEffect } from "react";
import { getImages } from '@/lib/firebase/firestore';
import { ImageList } from "./ImageList";


export default function Gallery() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setLoading(true)
        const res = await getImages()
        setData([...res])
        console.log(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="container mx-auto p-4">
            {data.length > 0 && data.map(gallery => (
                <div key={gallery.id} className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
                    <h1 key={gallery.id} className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">{gallery.name}</h1>
                    <ImageList key={gallery.id} imageURLs={gallery.images} useLinks={true} />
                </div>
            ))}
        </div>
    );

}