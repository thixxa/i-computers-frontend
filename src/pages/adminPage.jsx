import { Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import AdminProductPage from "./admin/adminProductPage.jsx"
import AdminAddProductPage from "./admin/adminAddProductPage.jsx"

import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { MdReviews } from "react-icons/md";




export default function AdminPage() {
    return (
        <div className="w-full h-full max-h-full flex bg-accent">
            <div className="w-[300px] h-full bg-accent">
                <div className="w-full h-[100px] text-primary flex items-center ">
                    <img src="/logo.png" alt="Logo" className="h-full" />
                    <h1 className="text-2xl">
                        Admin 
                    </h1>
                </div>
                <div className="w-full h-[400px] text-white text-2xl flex flex-col pl-[20px] pt-[20px]">
                    <Link to="/admin/"className="w-full flex items-center h-[50px] gap-[10px]"><LuClipboardList />Orders</Link>
                    <Link to="/admin/products"className="w-full flex items-center h-[50px] gap-[10px]"><LuBoxes />Products</Link>
                    <Link to="/admin/users"className="w-full flex items-center h-[50px] gap-[10px]"><FiUsers />Users</Link>
                    <Link to="/admin/reviews"className="w-full flex items-center h-[50px] gap-[10px]"><MdReviews />Reviews</Link>

                </div>

            </div>
            <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary border-[5px] border-accent flex flex-col rounded-3xl overflow-y-scroll">
                <Routes>
                    <Route path='/' element={<h1 className="text-3xl text-black">Orders</h1>} />
                    <Route path='/products' element={<AdminProductPage />} />
                    <Route path='/add-product' element={<AdminAddProductPage />} />
                    <Route path='/users' element={<h1 className="text-3xl text-black">Users</h1>} />
                    <Route path='/reviews' element={<h1 className="text-3xl text-black">Reviews</h1>} />


                </Routes>

            </div>

        </div>
    )
} 