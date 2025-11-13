import Header from "../components/header.jsx";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./productPage.jsx";
import ProductOverview from "./productOverviewPage.jsx";
import CartPage from "./cart.jsx";
import CheckOutPage from "./checkOut.jsx";

export default function HomePage() {
    return (
        <div className="w-full h-full">
            <Header/>
            <div className="w-full min-h-[calc(100%-100px)] overflow-y-scroll">
                <Routes>
                    <Route path='/' element={<h1>Home Page</h1>} />
                    <Route path='/products' element={<ProductPage/>} />
                    <Route path='/about' element={<h1>About</h1>} />
                    <Route path='/contact' element={<h1>Contact</h1>} />
                    <Route path='/overview/:productID' element={<ProductOverview/>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/checkout' element={<CheckOutPage/>} />
                    <Route path='/*' element={<h1>Page Not Found</h1>} />
                </Routes>

            </div>

        </div>
    )
}