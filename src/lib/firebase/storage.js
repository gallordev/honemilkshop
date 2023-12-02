import { storage } from "@lib/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export async function uploadImage(email, image) {
    const filePath = `images/${email}/${image.name}`;
    const newImageRef = ref(storage, filePath);
    await uploadBytesResumable(newImageRef, image);
    return await getDownloadURL(newImageRef);
}