import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { storage } from "../firebase/firebaseInit";

export default function Upload({ path }) {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `${path}/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    /*   
        const imagesListRef = ref(storage, path + "/");
        useEffect(() => {
            listAll(imagesListRef).then((response) => {
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        setImageUrls((prev) => [...prev, url]);
                    });
                });
            });
        }, []); 
    */

    return (
        <div className="">
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
                className=""
            />
            {imageUrls.length == 0 ? (
                <button onClick={uploadFile}> Upload Image</button>
            ) : (
                <div>Image Uploaded</div>
            )}
        </div>
    );
}
