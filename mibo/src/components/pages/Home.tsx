//import { Shield, Calendar, Users, HeartHandshake } from "lucide-react";

import { Star, MapPin,} from "lucide-react";
import { Users,User, Baby, HeartHandshake, Briefcase, Hospital,UserRound, Monitor } from "lucide-react";
import { Flower2,MessageCircleHeart,} from "lucide-react";
import { UserCheck, ShieldCheck, Clock3, } from "lucide-react";
import { CloudRain, Brain, RefreshCw } from "lucide-react";
//import { Wifi, Coffee, Car, Accessibility, Building, Library, TreePine, Dumbbell, CalendarDays,ArrowRight, }from "lucide-react";
import MIBOOFFICE from "../../assets/miboOffice.jpg";
import library from "../../assets/library.jpg";
import couple from "../../assets/couple.avif";
import kids from "../../assets/kids.png";
import corpatate from "../../assets/corpatate.webp";
import inddiv from "../../assets/inddiv.webp";
import depression from "../../assets/depession.webp";
import reading from "../../assets/reading.webp";
import sofaa from "../../assets/sofaa.webp";
import doctor from "../../assets/doctor.avif";

const SupportIcon = () => (
  <svg className="w-16 h-16 text-teal-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-10 10c0 4.42 3.58 8 8 8v4l4-4h4a10 10 0 0 0 10-10 10 10 0 0 0-10-10z" />
    <path d="M12 16v-4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const LovedOnesIcon = () => (
  <svg className="w-16 h-16 text-teal-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M17 11l2 2 4-4" />
  </svg>
);

const LanguageIcon = () => (
  <svg className="w-16 h-16 text-teal-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14M9 4v4M15 4v4M4 16h16M8 20v-4M16 20v-4" />
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z" />
  </svg>
);

export default function Home() {
  return (
    <div>
      {/* ========== HERO SECTION ========== */}

      <section className="relative">
        {/* Background Image */}
        <img
          src={sofaa}
          alt="Hero"
          className="w-full h-[700px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-24 left-24 max-w-xl">
          <div className="max-w-7xl mx-auto px-10">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-[#1F2560]">
                Welcome to Mibo
              </h1>

              <p className="mt-6 text-3xl text-gray-600 leading-relaxed">
                Professional care and support to help you feel better,
                every day.
              </p>

              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3">
                Book Appointment
                <span className="bg-white text-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Floating Card */}
        {/* ========== FEATURE BOXES (4 cards) ========== */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <UserCheck className="w-12 h-12 text-green-500" />
              <h3 className="font-semibold text-[#1F2560]">
                Trusted Professionals
              </h3>
              <p className="text-gray-500 mt-2">
                Experienced and certified mental health experts.
              </p>
            </div>

            <div>
              <ShieldCheck className="w-12 h-12 text-blue-500" />
              <h3 className="font-semibold text-[#1F2560]">
                Confidential & Secure
              </h3>
              <p className="text-gray-500 mt-2">
                Your privacy is our top priority.
              </p>
            </div>

            <div>
              <HeartHandshake className="w-12 h-12 text-pink-500" />
              <h3 className="font-semibold text-[#1F2560]">
                Personalized Care
              </h3>
              <p className="text-gray-500 mt-2">
                Tailored support for your unique needs.
              </p>
            </div>

            <div>
              <Clock3 className="w-12 h-12 text-purple-500" />
              <h3 className="font-semibold text-[#1F2560]">
                Flexible & Convenient
              </h3>
              <p className="text-gray-500 mt-2">
                Online and in-person sessions available.
              </p>
            </div>

          </div>
        </div>
      </section>


{/* 
       <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
          <div className="px-10">
            <h1 className="text-6xl font-bold text-blue-900">Welcome to Mibo</h1>
            <p className="mt-4 text-gray-600 text-lg">
              Professional care and support to help you feel better, every day.
            </p>
            <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
              Book Appointment
            </button>
          </div>
          <div>
            <img
              src={coverImage}
              alt="Hero"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>  */}

      {/* ========== FEATURE BOXES (4 cards) ========== */}
      {/* <section className="max-w-6xl mx-auto -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-blue-900">Trusted Professionals</h3>
            <p className="text-sm text-gray-500">Experienced and certified experts.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Confidential & Secure</h3>
            <p className="text-sm text-gray-500">Your privacy is our priority.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Personalized Care</h3>
            <p className="text-sm text-gray-500">Support tailored for you.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Flexible Sessions</h3>
            <p className="text-sm text-gray-500">Online and offline support.</p>
          </div>
        </div>
      </section> */}

      {/* ========== CARE DESIGNED AROUND YOU ========== */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <p className="text-green-500 font-semibold">HOW WE HELP</p>
        <h2 className="text-5xl font-bold text-blue-900 mt-3">
          Care Designed Around You
        </h2>
        <div className="w-16 h-1 bg-green-500 my-4 center"></div>

        <p className="text-gray-600 mt-4">
          Personalized support to help you feel better, cope stronger, and live well.
        </p>
        <div className="grid md:grid-cols-4 gap-8 mt-14">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
             <MessageCircleHeart className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="font-semibold mt-4">Therapy Sessions</h3>
            <p className="text-gray-500 text-sm">One-on-one expert guidance.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="font-semibold mt-4">Stress Management</h3>
            <p className="text-gray-500 text-sm">Learn coping and relaxation techniques.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                <HeartHandshake className="w-12 h-12 text-pink-500" />        
            </div>
            <h3 className="font-semibold mt-4">Relationship Counseling</h3>
            <p className="text-gray-500 text-sm">Improve communication and emotional balance.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
                <Monitor className="w-12 h-12 text-purple-500" />          
              </div>
            <h3 className="font-semibold mt-4">Online Consultations</h3>
            <p className="text-gray-500 text-sm">Easy access from anywhere.</p>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US + STATS ========== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-8">
          <div>
            <img
              src={doctor}
              alt="Why choose Mibo"
              className="rounded-3xl w-full"
            />
          </div>
          <div>
            <p className="text-green-500 font-semibold">WHY CHOOSE US</p>
            <h2 className="text-5xl font-bold text-blue-900 mt-3">
              Why People Choose <span className="text-green-500">Mibo</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Support that feels personal, professional, and accessible.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">10K+</div>
                <p className="text-gray-600">Sessions Completed</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <p className="text-gray-600">Experienced Therapists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MENTAL HEALTH SERVICES ========== */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center">
            Mental Health Services
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-12">
            Comprehensive care for your mental wellbeing
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center">
              <Hospital className="w-12 h-12 text-green-500" />
              <h3 className="text-2xl font-bold text-blue-900">In-Patient</h3>
              <div className="w-16 h-1 bg-blue-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2">
                Personalized care and 24/7 support in a safe and comfortable environment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center">
              <UserRound className="w-12 h-12 text-blue-500" />
              <h3 className="text-2xl font-bold text-blue-900">In-Person</h3>
              <div className="w-16 h-1 bg-blue-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2">
                Face‑to‑face sessions with our experts for meaningful support.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center">
              <Monitor className="w-12 h-12 text-purple-500" />
              <h3 className="text-2xl font-bold text-blue-900">Online Services</h3>
              <div className="w-16 h-1 bg-blue-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2">
                Secure and convenient online sessions from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIRTUAL SESSIONS BANNER ========== */}
      {/* <section className="bg-blue-50 py-16 px-8">
        <span className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Virtual sessions from anywhere
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
            Get the support you need, wherever you are.
          </p>
          <button className="mt-8 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition">
            Learn More
          </button>
        </span>
        <span>
         <img
          src={library}
          alt="library"
          className="h-50 w-150"
        />

        </span>
      </section> */}


      {/* ========== VIRTUAL SESSIONS BANNER ========== */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 items-center">

              {/* Left Side Content */}
              <div className="p-10">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  🌐
                </div>

                <h2 className="text-4xl font-bold text-blue-900">
                  Virtual Sessions
                  <br />
                  from anywhere
                </h2>

                <div className="w-16 h-1 bg-blue-500 my-4"></div>


                <p className="text-gray-600">
                  Get the support you need,
                  wherever you are.
                </p>

                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>

              {/* Right Side Image */}
              <div>
                <img
                  src={library}
                  alt="Virtual Sessions"
                  className="w-full h-[300px] object-cover"
                />
              </div>

            </div>

          </div>
        </section>

      {/* ========== MEASURABLE IMPACT WITH PERCENTAGES ========== */}
      {/* <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Measurable Impact
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            At Mibo, we focus on improving emotional wellness, enhancing mental
            resilience, and creating measurable impact for individuals and
            organizations alike.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-14">
            <div>
              <div className="text-5xl font-bold text-green-600">92%</div>
              <p className="text-gray-700 mt-2">Reported improved emotional well-being</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600">87%</div>
              <p className="text-gray-700 mt-2">Experienced reduction in anxiety levels</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600">76%</div>
              <p className="text-gray-700 mt-2">Felt more productive and focused at work</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600">94%</div>
              <p className="text-gray-700 mt-2">Showed higher engagement in therapy</p>
            </div>
          </div>
          <div className="mt-16 bg-blue-900 text-white py-12 px-6 rounded-3xl">
            <p className="text-3xl font-bold">100+ Organizations transformed</p>
            <p className="text-blue-100 mt-2">Through our mental wellness programs</p>
          </div>
        </div>
      </section> */}



           <section className="bg-white py-20 px-6 md:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Real results, real impact
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
        Our Measurable Impact
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        At Mibo, we focus on improving emotional wellness, enhancing mental resilience, and creating measurable impact for individuals and organizations alike.
      </p>

      {/* <!-- 4 impact cards with SVG icons and percentages --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {/* <!-- Card 1 - 92% with SVG (heart / well-being) --> */}
        <div className="impact-stat-card bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div className="text-5xl font-extrabold text-green-600">92%</div>
          <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

          <p className="text-gray-700 mt-3 font-medium">Reported improved emotional well-being</p>
        </div>
        {/* <!-- Card 2 - 87% with SVG (anxiety reduction / calm leaf) --> */}
        <div className="impact-stat-card bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto bg-teal-100 rounded-full flex items-center justify-center text-teal-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.636 5.818a9 9 0 0112.728 0M12 3v6m0 0-3-3m3 3 3-3M6 12h.01M12 12h.01M18 12h.01M5.818 18.364a9 9 0 0012.728 0M12 21v-6m0 0 3 3m-3-3-3 3" />
            </svg>
          </div>
          <div className="text-5xl font-extrabold text-blue-600">87%</div>
          <div className="w-16 h-1 bg-blue-500 my-4 mx-auto"></div>

          <p className="text-gray-700 mt-3 font-medium">Experienced reduction in anxiety levels</p>
        </div>
        {/* <!-- Card 3 - 76% with SVG (productivity / focus) --> */}
        <div className="impact-stat-card bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A9 9 0 0111.745 3M12 3v6l3 3M12 21a9 9 0 100-18" />
            </svg>
          </div>
          <div className="text-5xl font-extrabold text-green-600">76%</div>
          <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

          <p className="text-gray-700 mt-3 font-medium">Felt more productive and focused at work</p>
        </div>
        {/* <!-- Card 4 - 94% with SVG (engagement / therapy retention) --> */}
        <div className="impact-stat-card bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-purple-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="text-5xl font-extrabold text-blue-600">94%</div>
          <div className="w-16 h-1 bg-blue-500 my-4 mx-auto"></div>

          <p className="text-gray-700 mt-3 font-medium">Showed higher engagement in therapy</p>
        </div>
      </div>

      {/* <!-- 100+ Organizations transformed card (large blue badge) --> */}
      <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 px-6 rounded-3xl shadow-2xl transition-all hover:shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-4xl md:text-5xl font-black tracking-tight">100+ Organizations transformed</p>
              <p className="text-blue-100 text-lg mt-1">Through our mental wellness programs</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-full px-5 py-2 text-sm font-medium backdrop-blur-sm">
            ⚡️ Trusted by global leaders
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-8 text-blue-100 text-sm flex-wrap">
          <span className="flex items-center gap-1">🏢 Enterprise wellbeing</span>
          <span className="flex items-center gap-1">🌱 Inclusive programs</span>
          <span className="flex items-center gap-1">📈 Measurable ROI</span>
        </div>
      </div>
    </div>
  </section>







      {/* ========== TAILORED FOR FAMILIES, INDIVIDUALS, COUPLES, CHILDREN, CORPORATE ========== */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Tailored for those who </h2>
           <h2 className="text-4xl font-bold text-[#34b9a5]"> lead, seek, and listen
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <Users className="w-10 h-10 text-green-500" />
              <h3 className="text-xl font-bold text-blue-900">For Families</h3>
              <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2 text-sm">
                Personalized programs that help families strengthen communication, build resilience, and support each other.
              </p>
                  {/* Right Image */}           
                 <div>
                    <img src={couple} alt="family-session"  className="w-full h-auto"  style={{
                       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", }}
                    />
                  </div>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm">
              <User className="w-10 h-10 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-900">For Individuals</h3>
              <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2 text-sm">
                Tailored experiences designed for self-growth, mental well-being, and achieving personal goals.
              </p>
              {/* Right Image */}           
                 <div>
                    <img src={inddiv} alt="indiviual-session"  className="w-full h-auto"  style={{
                       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", }}
                    />
                  </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <HeartHandshake className="w-10 h-10 text-red-500" />
              <h3 className="text-xl font-bold text-blue-900">For Couples</h3>
              <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2 text-sm">
                Workshops and resources that help couples improve understanding, strengthen bonds, and grow together.
              </p>
              {/* Right Image */}           
                 <div>
                    <img src={couple} alt="family-session"  className="w-full h-auto"  style={{
                       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", }}
                    />
                  </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Baby className="w-10 h-10 text-pink-500" />
              <h3 className="text-xl font-bold text-blue-900">For Children</h3>
              <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2 text-sm">
                Engaging, age‑appropriate activities that support emotional development, creativity, and confidence.
              </p>
              {/* Right Image */}           
                 <div>
                    <img src={kids} alt="kids-session"  className="w-full h-auto"  style={{
                       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", }}
                    />
                  </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Briefcase className="w-10 h-10 text-purple-500" />
              <h3 className="text-xl font-bold text-blue-900">For Corporate</h3>
              <div className="w-16 h-1 bg-green-500 my-4 mx-auto"></div>

              <p className="text-gray-600 mt-2 text-sm">
                Enterprise-ready infrastructure designed to deliver real-time impact data, enabling tailored programs that drive measurable outcomes.
              </p>
              {/* Right Image */}           
                 <div>
                    <img src={corpatate} alt="corpatate-session"  className="w-full h-auto"  style={{
                       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", }}
                    />
                  </div>
            </div>
          </div>
        </div>
      </section>



      {/* ========== MENTAL HEALTH CONCERNS WE CARE FOR ========== */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center">
            Mental Health Concerns</h2>
             <h2 className="text-4xl font-bold text-[#34b9a5]  text-center">We Care For</h2> 
             <div className="w-16 h-1 bg-blue-500 my-4 mx-auto"></div>
         
          <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
           Mibo offers comprehensive support for 30+ mental health conditions. Explore some of the most common concerns below to see how we approach care.
          </p>
          


          <div className="grid md:grid-cols-3 gap-8">
  {/* Depression Card */}
  <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col h-full">
    {/* Header with image on the right */}
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <CloudRain className="w-12 h-12 text-blue-500 mb-4" />
        <h3 className="text-2xl font-bold text-blue-900">Depression</h3>
        <p className="text-lg font-semibold text-orange-400 mt-2">
          Affects 5% million people worldwide
        </p>
        <div className="w-10 h-1 bg-orange-500 mt-4"></div>
      </div>
      <img
        src={depression}
        alt="depression"
        className="w-32 h-40 object-cover border-4 border-orange-200 shrink-0"
        style={{ borderRadius: "45% 55% 60% 40% / 35% 40% 60% 65%" }}
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 mt-6">
      Depression is more than just feeling sad. We offer compassionate care
      and evidence-based treatments to help you find hope and joy again.
      treatments to help you find hope and joy again.treatments to help you find hope and joy again.
    </p>

    {/* Treatment Approaches */}
    <h4 className="font-semibold text-orange-400 text-sm uppercase mt-6">
      Treatment Approaches
    </h4>
    <div className="flex flex-wrap gap-3 mt-3">
      {["Medication Management", "Lifestyle Changes", "Support Groups"].map(
        (item) => (
          <span
            key={item}
            className="bg-orange-50 text-orange-500 px-4 py-2 rounded-full text-sm"
          >
            {item}
          </span>
        )
      )}
    </div>

    {/* Button */}
    <button className="mt-8 w-full bg-white border-2 border-orange-400 text-orange-400 py-4 rounded-full font-semibold text-lg transition hover:bg-orange-400 hover:text-white">
      Book Consultation
    </button>
  </div>

  {/* Generalized Anxiety Disorder Card */}
  <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col h-full">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <Brain className="w-12 h-12 text-blue-500 mb-4" />
        <h3 className="text-2xl font-bold text-blue-900">
          Generalized Anxiety Disorder
        </h3>
        <p className="text-lg font-semibold text-blue-400 mt-2">
          1 in 14 people affected globally
        </p>
        <div className="w-10 h-1 bg-blue-500 mt-4"></div>
      </div>
      <img
        src={depression}
        alt="anxiety"
        className="w-32 h-40 object-cover border-4 border-blue-200 shrink-0"
        style={{ borderRadius: "45% 55% 60% 40% / 35% 40% 60% 65%" }}
      />
    </div>

    <p className="text-gray-600 mt-6">
      Living with constant worry can be exhausting. Our specialized approaches
      help you manage anxiety and reclaim peace.anxiety and reclaim peace.anxiety and reclaim peace.
    </p>

    <h4 className="font-semibold text-blue-400 text-sm uppercase mt-6">
      Treatment Approaches
    </h4>
    <div className="flex flex-wrap gap-3 mt-3">
      {[
        "Relaxation Training",
        "Exposure Therapy",
        "Stress Management",
        "Mindfulness Techniques",
      ].map((item) => (
        <span
          key={item}
          className="bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm"
        >
          {item}
        </span>
      ))}
    </div>

    <button className="mt-8 w-full bg-white border-2 border-blue-400 text-blue-400 py-4 rounded-full font-semibold text-lg transition hover:bg-blue-400 hover:text-white">
      Book Consultation
    </button>
  </div>

  {/* Obsessive Compulsive Disorder Card */}
  <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col h-full">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <RefreshCw className="w-12 h-12 text-blue-500 mb-4" />
        <h3 className="text-2xl font-bold text-blue-900">
          Obsessive Compulsive Disorder
        </h3>
        <p className="text-lg font-semibold text-pink-400 mt-2">
          Affects 2–3% of population
        </p>
        <div className="w-10 h-1 bg-pink-500 mt-4"></div>
      </div>
      <img
        src={depression}
        alt="ocd"
        className="w-32 h-40 object-cover border-4 border-pink-200 shrink-0"
        style={{ borderRadius: "45% 55% 60% 40% / 35% 40% 60% 65%" }}
      />
    </div>

    <p className="text-gray-600 mt-6">
      OCD can feel overwhelming, but you're not alone. We provide specialized
      therapy to break free from compulsive cycles.
    </p>

    <h4 className="font-semibold text-pink-400 text-sm uppercase mt-6">
      Treatment Approaches
    </h4>
    <div className="flex flex-wrap gap-3 mt-3">
      {["ERP Therapy", "Medication", "Mindfulness", "Habit Reversal"].map(
        (item) => (
          <span
            key={item}
            className="bg-pink-50 text-pink-500 px-4 py-2 rounded-full text-sm"
          >
            {item}
          </span>
        )
      )}
    </div>

    <button className="mt-8 w-full bg-white border-2 border-pink-400 text-pink-400 py-4 rounded-full font-semibold text-lg transition hover:bg-pink-400 hover:text-white">
      Book Consultation
    </button>
  </div>
</div>
















        </div>
      </section>


      {/* ========== REAL CARE ADAPTS TO YOUR LIFE ========== */}
      
          <section className="bg-[#020B5C] py-20 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT SIDE */}
              <div>

                <h2 className="text-6xl font-bold leading-tight text-white">
                  Real care adapts to
                  <br />
                  <span className="text-cyan-400">
                    your life,
                    <br />
                    your people,
                    <br />
                    your pace.
                  </span>
                </h2>

                <div className="w-16 h-1 bg-cyan-400 rounded-full mt-6"></div>

                <p className="text-white/80 text-xl mt-6 max-w-xl">
                  Care doesn't happen in isolation.
                  It works when it's rooted in your everyday life.
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <HeartHandshake className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mt-4">
                      Personalized Care
                    </h3>
                    <div className="w-10 h-1 bg-cyan-400 mx-auto mt-4"></div>
                    <p className="text-white/70 mt-4">
                      Tailored support that fits your life.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Users className="w-10 h-10 text-blue-400" />
                    </div>

                    <h3 className="text-white font-bold text-2xl mt-4">
                      For You & Your People
                    </h3>
                    <div className="w-10 h-1 bg-blue-400 mx-auto mt-4"></div>
                    <p className="text-white/70 mt-4">
                      Care that includes what matters most.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Flower2 className="w-10 h-10 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mt-4">
                      Peace of Mind
                    </h3>
                    <div className="w-10 h-1 bg-purple-400 mx-auto mt-4"></div>
                    <p className="text-white/70 mt-4">
                      Support that brings balance every day.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative">
                <img  src={reading} alt="Reading"
                  className="w-full max-w-[550px] h-[650px] object-cover border-4 border-cyan-400 mx-auto"
                  style={{ borderRadius: "35% 65% 55% 45% / 30% 40% 60% 70%",  }}
                />                
              </div>

            </div>
          </section>


      {/* ========== CARE IN YOUR LANGUAGE + SUPPORT SHAPED AROUND YOU ========== */}

     <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 - Support shaped around you */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
            <div className="flex justify-center items-center py-8 bg-gray-50">
              <SupportIcon />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 relative inline-block pb-2 mb-3">
                Support shaped around you
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500 rounded-full"></span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We look at your needs and experiences to connect you with someone who truly understands your journey and what support looks like.
              </p>
            </div>
          </div>

          {/* Card 2 - Care that includes your loved ones */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
            <div className="flex justify-center items-center py-8 bg-gray-50">
              <LovedOnesIcon />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 relative inline-block pb-2 mb-3">
                Care that includes your loved ones
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500 rounded-full"></span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We bring your loved ones into the process with joint sessions, updates and resources—so you get the right support, together.
              </p>
            </div>
          </div>

          {/* Card 3 - Care in your language, built for your life */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
            <div className="flex justify-center items-center py-8 bg-gray-50">
              <LanguageIcon />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 relative inline-block pb-2 mb-3">
                Care in your language, built for your life
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500 rounded-full"></span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We connect you with experts who understand your language and cultural context—so you can express yourself freely and feel truly understood, without over-explaining or anything getting lost in translation.
              </p>
            </div>
          </div>

        </div>
      </div>
     </section>






      {/* <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-2xl font-bold text-blue-900">Support shaped around you</h3>
              <p className="text-gray-600 mt-3">
                We look at your needs and experiences to connect you with someone who truly understand your journey and what support look like.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🫂</div>
              <h3 className="text-2xl font-bold text-blue-900">Care that includes your loved ones</h3>
              <p className="text-gray-600 mt-3">
                We bring your loved ones into the process with joint sessions, updates and resources-so you get the right support, together.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-blue-900">Care in your language, build for your  life</h3>
              <p className="text-gray-600 mt-3">
                We connect you with experts who understand your language and cultural context-so you can express yoursellf freely and feel truly understood, without over-explaining or anything getting lost in translation.
              </p>
            </div>
          </div>
        </div>
      </section> */}



{/* ========== CARE AND SUPPORT NEAR YOU ========== */}

<section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center">
          Care and Support Near You
        </h2>
        <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
          Our centres across India bring expert mental health care close to you.
          Each location is designed for comfort, privacy, and healing.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Bengaluru Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
            <div className="relative">
              <img src={MIBOOFFICE} alt="Bengaluru" className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4 bg-white px-5 py-2 rounded-full shadow">
                <h3 className="font-bold text-2xl text-gray-800">Bengaluru</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.8</span>
                <span className="text-gray-500 text-sm">(642)</span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-600 text-sm">
                Our Bengaluru centres offer professional mental health care in a serene environment.
              </p>

              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                LOCATIONS IN BENGALURU
              </h4>
              <div className="grid grid-cols-2 gap-y-3 mt-2">
                {["Indiranagar", "Whitefield", "Koramangala", "Jayanagar"].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                AMENITIES
              </h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Free Parking", "Wheelchair Accessible", "AC Consultation Rooms", "Waiting Lounge"].map((item) => (
                  <span key={item} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 w-full bg-[#163A7A] hover:bg-[#102f66] text-white py-4 rounded-full font-semibold text-lg transition">
                View Centre Details
              </button>
            </div>
          </div>

          {/* Mumbai Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
            <div className="relative">
              <img src={MIBOOFFICE} alt="Mumbai" className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4 bg-white px-5 py-2 rounded-full shadow">
                <h3 className="font-bold text-2xl text-gray-800">Mumbai</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.7</span>
                <span className="text-gray-500 text-sm">(289)</span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-600 text-sm">
                Find peace and professional care at our Mumbai locations.
              </p>

              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                LOCATIONS IN MUMBAI
              </h4>
              <div className="grid grid-cols-2 gap-y-3 mt-2">
                {["Bandra", "Andheri", "Powai", "Lower Parel"].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                AMENITIES
              </h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Metro Access", "Valet Parking", "Cafeteria", "Library"].map((item) => (
                  <span key={item} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 w-full bg-[#163A7A] hover:bg-[#102f66] text-white py-4 rounded-full font-semibold text-lg transition">
                View Centre Details
              </button>
            </div>
          </div>

          {/* Kochi Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
            <div className="relative">
              <img src={MIBOOFFICE} alt="Kochi" className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4 bg-white px-5 py-2 rounded-full shadow">
                <h3 className="font-bold text-2xl text-gray-800">Kochi</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.9</span>
                <span className="text-gray-500 text-sm">(153)</span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-600 text-sm">
                Experience compassionate care in our Kochi facilities designed for professional care.
              </p>

              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                LOCATIONS IN KOCHI
              </h4>
              <div className="grid grid-cols-2 gap-y-3 mt-2">
                {["Marine Drive", "Kakkanaad", "Ernakulam", "Edappally"].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                AMENITIES
              </h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Sea View", "Garden Area", "Yoga Studio", "Meditation Space"].map((item) => (
                  <span key={item} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 w-full bg-[#163A7A] hover:bg-[#102f66] text-white py-4 rounded-full font-semibold text-lg transition">
                View Centre Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>





{/* Sticky Book Appointment Button */}
<div className="fixed bottom-6 right-6 z-50">
    <button className="bg-[#34b9a5] hover:bg-[#2a9d8c] text-white px-6 py-3 rounded-full shadow-xl font-semibold transition duration-300">

  {/* <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold transition duration-300"> */}
    Book Appointment
  </button>
</div>




               {/* <!-- Contact Section: exactly as described in the image --> */}
  <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-4xl mx-auto text-center">
      
      {/* <!-- heading --> */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Still not sure what to do?
      </h2>
      
      {/* <!-- phone call to action with large number --> */}
      <div className="mt-6">
        <p className="text-gray-600 text-lg">Please call us, we will sort it out</p>
        <a href="tel:+919083335000" className="inline-block mt-2 text-3xl md:text-4xl font-extrabold text-green-600 hover:text-green-700 transition">
          +91 90833 35000
        </a>
      </div>
      
      {/* <!-- divider (optional, for visual clarity) --> */}
      <div className="w-20 h-1 bg-green-500 rounded-full mx-auto my-10"></div>
      
      {/* <!-- address block --> */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-blue-900">Kochi Office</h3>
        <address className="not-italic text-gray-700 mt-2 leading-relaxed max-w-md mx-auto">
          38/1818, Kannanthodath Road, Near Changampuzha Park<br />
          Metro Station, Edappally P.O., Kochi, Ernakulam, PIN: 682024
        </address>
      </div>
      
      {/* <!-- email block --> */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-900">Email Us</h3>
        <a href="mailto:reach@mibocare.com" className="text-green-600 text-lg font-medium hover:underline">
          reach@mibocare.com
        </a>
      </div>
      
    </div>
  </section>
 
      {/* ========== SUBMIT APPLICATION CTA ========== */}
      {/*<section className="bg-blue-900 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to begin your journey?</h2>
          <p className="text-blue-100 mt-2 mb-6">
            Take the first step towards better mental health.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition">
            Submit Application
          </button>
        </div>
      </section> */}
    </div>
  );
}
