import { Link } from "react-router-dom";
export default function LoginPage() {
    return(
        <div className="w-full h-screen bg-[url('/bglogin.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex flex-col justify-center items-center">
                <img src="/logo.png" alt="Logo" className="w-[200px] h-[200px] mb-[20px] object-cover"/>
                <h1 className="text-[50px] text-[#3216cf] text-shadow-black font-bold">
                    Plug In  . Power up . Play Hard
                </h1>
                <p className="text-[30px] text-white font-semibold text-center italic">
                    Your ultimate destination for gaming gear and accessories. Elevate your gaming experience with our top-notch products designed for gamers by gamers.
                </p>

            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center">
                    <h1 className="text-[40px] font-bold mb-[20px] text-accent text-shadow-white">
                        Login
                    </h1>
                    <input type ="email" placeholder="Your Email" className="w-[80%] h-[50px] mb-[20px] rounded-lg border-2 border-gray-300 px-4 text-[20px] focus:outline-none focus:border-accent"/>
                    <input type ="password" placeholder="Your Password" className="w-[80%] h-[50px] rounded-lg border-2 border-gray-300 px-4 text-[20px] focus:outline-none focus:border-accent"/>
                    <p className="w-[80%] text-right mb-[20px]">
                        <Link to="/forgot-password" className="text-accent hover:underline italic">
                            Forgot Password?
                        </Link>
                    </p>
                    <button className="w-[80%] h-[50px] bg-transparent text-white text-[20px] font-bold rounded-lg border-[2px] border-accent hover:bg-accent hover:text-white">
                        Login
                    </button>
                    <p className="text-[16px] text-white mt-[20px] not-italic">
                        Don't have an account?
                        <Link to="/register" className="text-accent ml-[5px] hover:underline italic">
                            Register Here
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    )
}