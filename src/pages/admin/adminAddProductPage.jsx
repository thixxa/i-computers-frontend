import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function AdminAddProductPage() {

    const [productID, setProductID] = useState('');
    const [name, setName] = useState('');
    const [altNames, setAltNames] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [labelledPrice, setLabelledPrice] = useState(0);
    const [images, setImages] = useState("");
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [stock, setStock] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);

    const navigate = useNavigate();

    async function addProduct() {
        const token = localStorage.getItem('token');

        if(token == null) {
            toast.error('You must be logged in as admin to add products.');
            navigate('/login');
            return;
        }
        if(productID == "" || name == "" || description == "" || category == "" || brand == "" || model == "") {
            toast.error('Please fill in all fields.');
            return;
        }

        try{
            const altNamesArray = altNames.split(',') // Split alternative names by commas and trim whitespace
            const imagesArray = images.split(',') // Split image URLs by commas and trim whitespace

            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/", {
                productID : productID,
                name : name,
                altNames : altNamesArray,
                description : description,
                price : price,
                labelledPrice : labelledPrice,
                images : imagesArray,
                category : category,
                brand : brand,
                model : model,
                stock : stock,
                isAvailable : isAvailable,
            }, {
                headers: {
                    Authorization: "Bearer " +token
                }
            });
            toast.success('Product added successfully.');
            navigate('/admin/products');

        }catch(err){
            toast.error('Error adding product. ' + err.response.data.message);
            console.log(err);

        }

    }

    
    return (
        <div className="w-full h-full flex justify-center items-start overflow-y-scroll p-[50px]">
            <div className="w-[800px] bg-accent/65 rounded-2xl p-[40px]">
                <h1 className="w-full text-xl text-white mb-[20px] text-center"><AiOutlineProduct className="inline-block mr-[10px] text-2xl" />
                    Add New Product
                </h1>
                <div className="w-full bg-white p-[20px] flex flex-wrap justify-between rounded-xl shadow-2xl">
                    <div className="my-[10px] w-[40%]">
                        <label>Product ID</label>
                        <input
                            value={productID}
                            onChange={(e) => { setProductID(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="w-full text-right">Provide the unique ID</p>
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label>Name</label>
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-full">
                        <label>Alternative Names</label>
                        <input
                            value={altNames}
                            onChange={(e) => { setAltNames(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="w-full text-right">Separate multiple names with commas</p>
                    </div>
                    <div className="my-[10px] w-full">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            className="w-full h-[100px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] py-[10px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label>Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label>Label Price</label>
                        <input
                            type="number"
                            value={labelledPrice}
                            onChange={(e) => { setLabelledPrice(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-full">
                        <label>Images</label>
                        <textarea
                            value={images}
                            onChange={(e) => { setImages(e.target.value) }}
                            className="w-full h-[100px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] py-[10px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-[30%] flex flex-col">
                        <label>Category</label>
                        <select value={category} onChange={(e) => { setCategory(e.target.value) }} className="border-[1px] border-accent shadow-2xl rounded-2xl">
                            <option value="CPU">CPU</option>
                            <option value="GPU">GPU</option>
                            <option value="RAM">RAM</option>
                            <option value="Storage">Storage</option>
                            <option value="Motherboard">Motherboard</option>
                            <option value="Mouse">Mouse</option>
                            <option value="Monitor">Monitor</option>
                            <option value="Power Supply">Power Supply</option>
                            <option value="Cables">Cables</option>
                            <option value="Computers">Computers</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label>Brand</label>
                        <input
                            value={brand}
                            onChange={(e) => { setBrand(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label>Model</label>
                        <input
                            value={model}
                            onChange={(e) => { setModel(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label>Stock</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => { setStock(e.target.value) }}
                            className="w-full h-[40px] border-[1px] border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="my-[10px] w-[40%] flex flex-col">
                        <label>Available</label>
                        <select value={isAvailable} onChange={(e) => { setIsAvailable(e.target.value) }} className="border-[1px] border-accent shadow-2xl rounded-2xl">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <Link to='/admin/products' className="w-[48%] h-[40px] border-[1px] border-accent bg-red-300 shadow-2xl rounded-2xl px-[20px] mb-[10px] hover:text-white hover:bg-red-600 flex justify-center items-center">
                        Cancel
                    </Link>
                    <button 
                    onClick={addProduct}
                    className="w-[48%] h-[40px] border-[1px] bg-blue-300 border-accent shadow-2xl rounded-2xl px-[20px] mb-[10px] hover:text-white hover:bg-blue-600">
                        Add Product
                    </button>
                </div>
            </div>
            
        </div>
    );
}