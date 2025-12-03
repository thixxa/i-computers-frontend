import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";



export default function ContactPage() {
  return (
    <div className="w-full min-h-screen text-secondary flex flex-col bg-primary">
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-10 lg:py-16">

        <div className="flex flex-col gap-10 items-start">
          
          <div className="flex-1 space-y-5">
            <p className="uppercase tracking-[0.25em] text-sm text-accent/80 font-semibold">
              Contact Us
            </p>

            <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug">
              Get in Touch with <span className="text-accent">i Computers</span>
            </h1>

            <p className="text-base lg:text-lg text-secondary leading-relaxed text-justify">
              Need help with a product, looking for availability, or have questions about
              your order? Our team at <span className="font-semibold text-accent">i Computers</span> is ready to assist you anytime.
            </p>

            <p className="text-md text-secondary leading-relaxed text-justify">
              Reach us through the following methods:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">

              <Link to="#" className="bg-white shadow-md rounded-xl px-4 py-4 text-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-accent flex justify-center items-center gap-2">
                  <BsTelephone /> Call
                </p>
                <p className="text-md text-secondary/70 mt-1">+941123456789</p>
              </Link>

              <Link to="#" className="bg-white shadow-md rounded-xl px-4 py-4 text-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-accent flex justify-center items-center gap-2">
                  <FaWhatsapp/> WhatsApp
                </p>
                <p className="text-md text-secondary/70 mt-1">+94779865432</p>
              </Link>

              <Link to="#"
                className="bg-white shadow-md rounded-xl px-4 py-4 text-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-accent flex justify-center items-center gap-2">
                  <FaFacebook/> Facebook
                </p>
                <p className="text-md text-secondary/70 mt-1">i-Computers</p>
              </Link>

              <Link to="#" className="bg-white shadow-md rounded-xl px-4 py-4 text-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-accent flex justify-center items-center gap-2">
                  <MdOutlineEmail />Email
                </p>
                <p className="text-md text-secondary/70 mt-1 break-all">
                  icomputersSL@gmail.com
                </p>
              </Link>
    
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
