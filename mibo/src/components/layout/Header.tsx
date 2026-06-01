import { Phone } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-700">
        Mibo
      </h1>

        <div className="hidden md:flex items-center gap-x-8">
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">BOOK APPOINTMENT</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">LOCATIONS</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Services</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Conditions</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">About Us</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Who It's For</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Why Mibo</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Experts</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Blog</a>
            </div>

        <button className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200">
          <Phone className="w-5 h-5" />
        </button>
      <button className="bg-blue-700 text-white px-5 py-2 rounded-full">
        SIGN NOW
      </button>
    </nav>
  );
};


export default Header;