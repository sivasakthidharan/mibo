//import { Instagram, TwitterIcon, Facebook } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (

<footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


             <div className="flex justify-center space-x-6 mb-10">
                <FaTwitter className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
                <FaInstagram className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
                <FaFacebook className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />
                <FaLinkedin className="text-2xl text-gray-700 hover:text-black cursor-pointer transition" />

              </div>
        {/* Social Icons - centered at the top */}
         {/* <div className="flex justify-center space-x-6 mb-10">
          <a href="#" className="text-gray-500 hover:text-teal-600 transition" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-teal-600 transition" aria-label="Twitter">
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-teal-600 transition" aria-label="Facebook">
            <Facebook className="h-6 w-6" />
          </a>
        </div>  */}

            {/* Footer Columns */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold text-gray-800">Mibo</span>
              </div>
              <p className="text-gray-500 text-sm">Professional care and support to help you feel better, every day.</p>
            </div> */}
            <div>
              <h4 className="font-semibold text-green-800 mb-4">ABOUT MIBO</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>About Us</li>
                <li>Careers</li>
                <li>Mibo in Media</li>
                <li>For Therapists</li>
                <li>Contacts Us</li>
                <li>Helps/FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Adult Therapy</li>
                <li>Adult Psychiatry</li>
                <li>Mental Health Hospital</li>
                <li>Children First Services</li>
                <li>Couple Therapy</li>
                <li>Self-Care</li>
                <li>Assessments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-4">CONDITIONS</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Depression</li>
                <li>Anxiety</li>
                <li>Bipolar Disorder</li>
                <li>OCD</li>
                <li>ADHD</li>
                <li>Social Anxiety</li>
                <li>Women's Mental Health</li>
                <li>Addiction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-4">PROFESSIONALS</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Therapists</li>
                <li>Psychiatrists</li>
                <li>Child & Youth Experts</li>
                <li>Couple Therapists</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 Mibo Care. All rights reserved.
          </div>
        </div>
      </footer>

    
);
};


export default Footer;