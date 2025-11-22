import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { LuListCollapse } from "react-icons/lu";
import { useState } from "react";


export default function Header(){

    const [sideBarOpen, setSidebarOpen] = useState(false);


    return(
        <header className="w-full h-[100px] bg-accent flex relative">
            <LuListCollapse 
                onClick={()=>{setSidebarOpen(true)}}
                className="text-3xl text-primary my-auto p-[5px]left-4 lg:hidden " />
            <img src="/logo.png" alt="Logo" className="h-full " />
            <div className="w-full h-full hidden lg:flex text-primary justify-center gap-[30px] text-2xl font-bold items-center ">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Link to="/cart" className="w-[80px] h-full absolute right-0 flex justify-center items-center">
                <BiShoppingBag className="text-3xl"/>
            </Link>
            {
            sideBarOpen && 
            <div className="fixed w-[100vw] h-screen top-0 left-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden">
            <div className="w-[250px] h-screen flex-col border-2 relative">
                <div className="absolute w-full h-full bg-white left-[-250px] transform-flat translate-x-[250px] transition-transform duration-300 flex flex-col">
                    <div className="w-full h-[100px] bg-accent flex items-center px-4">
                        <img src="/logo.png" alt="Logo" className="h-full " />
                        <LuListCollapse 
                            onClick={()=>{setSidebarOpen(false)}}
                            className="text-3xl text-primary my-auto absolute right-4 rotate-180"/>
                    </div>
                    <div className="w-full h-full flex flex-col text-secondary text-2xl font-bold gap-3 px-4">
                        <a href="/" onClick={()=>setSidebarOpen(false)}>Home</a>
                        <a href="/products" onClick={()=>setSidebarOpen(false)}>Products</a>
                        <a href="/about" onClick={()=>setSidebarOpen(false)}>About</a>
                        <a href="/contact" onClick={()=>setSidebarOpen(false)}>Contact</a>
                    </div>

                </div>
            </div>
            
            </div>
            }
        </header>
        
    )
}