
import { useState } from "react";
import uploadFile from "../utils/mediaUpload";


export default function TestPage() {

    const [file, setFile] = useState(null)

    async function handleUpload(){
       const url = await uploadFile(file)
       console.log(url);
    }

    return(
        <div className="w-full h-full bg-red-200 flex justify-center items-center">
            <input
                type ="file"
                onChange={
                    (e)=> {
                        setFile(e.target.files[0])
                    }
                }>
            </input>
            <button onClick={handleUpload} className="bg-red-600 text-white rounded">
                Upload
            </button>

        </div>
    )
}