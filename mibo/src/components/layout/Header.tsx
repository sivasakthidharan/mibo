// import { Phone, } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";
// import logo from "../../assets/logo.webp";
// //import {ChevronDown} from "lucide-react"

// const Header = () => {
//   return (
//     <nav className="flex justify-between items-center px-10 py-5 shadow-sm">
//           <div>
//             <img
//               src={logo}
//               alt="logo"
//               className="h-12 w-auto "
//             />
//           </div>

//         <div className="hidden md:flex items-center gap-x-8">
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">BOOK APPOINTMENT</a>
//               {/* <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">LOCATIONS  <ChevronDown size={10} /></a> */}
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">LOCATIONS ▾</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Services ▾</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Conditions</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">About Us</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Who It's For</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Why Mibo</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Experts</a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">Blog</a>
//             </div>

//         {/* <button className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200">
//           <Phone className="w-5 h-5" />
//         </button>
//         <button className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200">
//           <BsWhatsapp className="w-5 h-5" />
//         </button>
//       <button className="bg-blue-700 text-white px-5 py-2 rounded-full">
//         SIGN NOW
//       </button> */}
//       <div className="flex items-center gap-4">

//         {/* Phone Icon */}
//         <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
//           <Phone size={22} />
//         </button>

//         {/* WhatsApp Icon */}
//         <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition">
//           <BsWhatsapp size={22} />
//         </button>

//         {/* Sign In Button */}
//         <button className="bg-[#23145B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a1045] transition">
//           SIGN IN
//         </button>

//       </div>
//     </nav>
//   );
// };


// export default Header;

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../assets/logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative flex justify-between items-center px-4 md:px-10 py-3 md:py-5 shadow-sm bg-white z-20">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="h-8 md:h-12 w-auto" />
      </div>

      {/* Desktop Navigation - hidden on mobile, visible from md upwards */}
      <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          BOOK APPOINTMENT
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          LOCATIONS ▾
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          Services ▾
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          Conditions
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          About Us
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          Who It's For
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          Why Mibo
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          Experts
        </a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition whitespace-nowrap">
          Blog
        </a>
      </div>

      {/* Right side buttons + Hamburger (mobile) */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Phone Icon */}
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
          <Phone size={18} className="md:w-5 md:h-5" />
        </button>

        {/* WhatsApp Icon */}
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition">
          <BsWhatsapp size={18} className="md:w-5 md:h-5" />
        </button>

        {/* Sign In Button */}
        <button className="bg-[#23145B] text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-[#1a1045] transition">
          SIGN IN
        </button>

        {/* Mobile Menu Toggle Button (visible only on small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (overlay) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50 md:hidden">
          <div className="flex flex-col py-4 px-6 space-y-3">
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              BOOK APPOINTMENT
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              LOCATIONS ▾
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Services ▾
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Conditions
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              About Us
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Who It's For
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Why Mibo
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Experts
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;