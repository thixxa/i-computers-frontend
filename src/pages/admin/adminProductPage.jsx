import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

export default function AdminProductPage() {
    return (
        <div className="w-full h-full flex justify-center items-center relative">
            Products Page

            <Link to="/admin/add-product" className="w-[50px] h-[50px] flex justify-center items-center text-6xl border-[2px] rounded-full absolute right-[20px] bottom-[20px] hover:text-white hover:bg-accent">
                <BiPlus />
            </Link>
        </div>
    );
}
