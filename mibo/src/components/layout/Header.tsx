import { Phone,ChevronDown } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
//import logo from "../assets/logo.webp";
//import logo from "../assets/logo.webp";
import logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-sm">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto "
            />
          </div>

        <div className="hidden md:flex items-center gap-x-8">
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">BOOK APPOINTMENT</a>
              {/* <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">LOCATIONS  <ChevronDown size={10} /></a> */}
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">LOCATIONS ▾</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Services ▾</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Conditions</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">About Us</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Who It's For</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Why Mibo</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Experts</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Blog</a>
            </div>

        {/* <button className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200">
          <Phone className="w-5 h-5" />
        </button>
        <button className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200">
          <BsWhatsapp className="w-5 h-5" />
        </button>
      <button className="bg-blue-700 text-white px-5 py-2 rounded-full">
        SIGN NOW
      </button> */}
      <div className="flex items-center gap-4">

        {/* Phone Icon */}
        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
          <Phone size={22} />
        </button>

        {/* WhatsApp Icon */}
        <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition">
          <BsWhatsapp size={22} />
        </button>

        {/* Sign In Button */}
        <button className="bg-[#23145B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a1045] transition">
          SIGN IN
        </button>

      </div>
    </nav>
  );
};


export default Header;