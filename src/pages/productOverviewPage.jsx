import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loader from "../components/loader";

export default function ProductOverview(){

    const params = useParams(); //url eke ena parameters ganna(productID eka ganna) 

    const [product, setProduct] = useState(null);

    cosnt [ currentStatus, setCurrrentStatus] = useState("loading");

    useEffect(()=>{
        if(currentStatus=loading){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/products/" + params.productID)
            .then(
                (response)=>{
                    setProduct(response.data);
                    setCurrrentStatus("success");
                }
            ).catch(
                (error)=>{
                    toast.error("Product not found. Please try again");
                    setCurrrentStatus("error")
                }
            )
        }
    }, [])

    return(
        <>
        {
            currentStatus == "loading" && <Loader/>
        }
        {
            currentStatus == "error" && <h1 className="text-center text-2xl mt-10">Error loading product</h1>
        }
        {
            currentStatus == "success" &&
            <div className="w-full h-[calc(100vh-100px)] flex bg-red-600">


            </div>
        }
        </>
    )
}