import { storage } from "@/lib/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export async function uploadImage(email, image) {
    const filePath = `images/${email}/${Date.now()}-${image.name}`;
    const newImageRef = ref(storage, filePath);
    await uploadBytesResumable(newImageRef, image);
    return await getDownloadURL(newImageRef);
}

export async function uploadImages(email, images) {
    const imagePromises = Array.from(images, (image) => uploadImage(email,image));
    const imageRes = await Promise.all(imagePromises);
    return imageRes; 
}