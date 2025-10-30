import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/loader";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);  

  useEffect(() => {
    if(!loaded){
        axios
        .get(import.meta.env.VITE_BACKEND_URL + "/products")
        .then((response) => {
            console.log(response.data);
            setProducts(response.data);
            setLoaded(true);
        });
    }
    
  }, [loaded]); 

  return (
    <div className="min-h-screen w-full bg-primary/60 text-secondary">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            Products
          </h1>
        </div>

        <div className="overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-xl">
          <div className="overflow-x-auto">
            {loaded ? 
            <table className="min-w-full table-auto">
              <thead className="bg-secondary text-primary">
                <tr className="text-left text-sm uppercase tracking-wider">
                  <th className="px-5 py-4">Image</th>
                  <th className="px-5 py-4">Product ID</th>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Price</th>
                  <th className="px-5 py-4">Labelled Price</th>
                  <th className="px-5 py-4">Brand</th>
                  <th className="px-5 py-4">Model</th>
                  <th className="px-5 py-4">Stock</th>
                  <th className="px-5 py-4">Availability</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-secondary/10">
                {products.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-primary/20 transition-colors hover:bg-accent/10"
                    >
                      <td className="px-5 py-4">
                        <img
                          src={item.images[0]}
                          className="h-10 w-10 rounded-lg object-cover ring-1 ring-secondary/10"
                        />
                      </td>
                      <td className="px-5 py-4 font-medium text-secondary/80">
                        {item.productID}
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-semibold">{item.name}</div>
                      </td>
                      <td className="px-5 py-4 text-secondary/70">
                        {item.category}
                      </td>
                      <td className="px-5 py-4">
                        <div className="inline-block rounded-lg bg-secondary/5 px-2 py-1 text-sm">
                          ${item.price}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="inline-block rounded-lg bg-secondary/5 px-2 py-1 text-sm ">
                          ${item.labelledPrice}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-secondary/80">
                        {item.brand}
                      </td>
                      <td className="px-5 py-4 text-secondary/80">
                        {item.model}
                      </td>
                      <td className="px-5 py-4">
                        <div className="inline-block rounded-lg bg-accent/10 px-2 py-1 text-sm text-accent">
                          {item.stock}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="inline-block rounded-full bg-secondary/5 px-3 py-1 text-xs">
                          {item.isAvailable}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-sm text-accent">
                          {/* Placeholder for future action buttons/links */}
                          <button
                            onClick={
                                ()=>{
                                    const token = localStorage.getItem("token"); 
                                    axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + item.productID , {
                                        headers: {
                                            Authorization: `Bearer ${token}`
                                        }
                                    })
                                    .then(
                                        ()=>{
                                            toast.success("Product delete successfully");
                                            setLoaded(false)
                                        }
                                    )
                                }     
                            } 
                            className="w-[100px] bg-red-400 flex justify-center items-center text-white p-2 rounded-lg cursor-pointer hover:bg-red-600">
                            Delete
                          </button>
                          <div className="cursor-default select-none opacity-60">
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>:<Loader/>}
          </div>
        </div>

        <Link
          to="/admin/add-product"
          className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition-transform hover:scale-105 focus:scale-105 focus:outline-none"
        >
          <BiPlus className="text-4xl" />
        </Link>
      </div>
    </div>
  );
}
