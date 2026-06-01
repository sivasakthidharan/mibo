//import { Shield, Calendar, Users, HeartHandshake } from "lucide-react";

import { Star, MapPin, Wifi, Coffee, Car, Accessibility, Building, Library, TreePine, Dumbbell, } from "lucide-react";
import coverImage from "../../assets/coverImage.jpg";
import MIBOOFFICE from "../../assets/miboOffice.jpg";



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
      </section>

      {/* ========== FEATURE BOXES (4 cards) ========== */}
      <section className="max-w-6xl mx-auto -mt-10 relative z-10">
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
      </section>

      {/* ========== CARE DESIGNED AROUND YOU ========== */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <p className="text-green-500 font-semibold">HOW WE HELP</p>
        <h2 className="text-5xl font-bold text-blue-900 mt-3">
          Care Designed Around You
        </h2>
        <p className="text-gray-600 mt-4">
          Personalized support to help you feel better, cope stronger, and live well.
        </p>
        <div className="grid md:grid-cols-4 gap-8 mt-14">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
              <span className="text-2xl">💬</span>
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
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="font-semibold mt-4">Relationship Counseling</h3>
            <p className="text-gray-500 text-sm">Improve communication and emotional balance.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
              <span className="text-2xl">📱</span>
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
              src={coverImage}
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
              <h3 className="text-2xl font-bold text-blue-900">In-Patient</h3>
              <p className="text-gray-600 mt-2">
                Personalized care and 24/7 support in a safe and comfortable environment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">In-Person</h3>
              <p className="text-gray-600 mt-2">
                Face‑to‑face sessions with our experts for meaningful support.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Online Services</h3>
              <p className="text-gray-600 mt-2">
                Secure and convenient online sessions from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIRTUAL SESSIONS BANNER ========== */}
      <section className="bg-blue-50 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Virtual sessions from anywhere
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
            Get the support you need, wherever you are.
          </p>
          <button className="mt-8 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* ========== MEASURABLE IMPACT WITH PERCENTAGES ========== */}
      <section className="bg-white py-20 px-8">
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
      </section>

      {/* ========== TAILORED FOR FAMILIES, INDIVIDUALS, COUPLES, CHILDREN, CORPORATE ========== */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Tailored for those who </h2>
           <h2 className="text-4xl font-bold text-[#34b9a5]"> lead, seek, and listen
          </h2>
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Families</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Personalized programs that help families strengthen communication, build resilience, and support each other.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Individuals</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Tailored experiences designed for self-growth, mental well-being, and achieving personal goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Couples</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Workshops and resources that help couples improve understanding, strengthen bonds, and grow together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Children</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Engaging, age‑appropriate activities that support emotional development, creativity, and confidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Corporate</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Enterprise-ready infrastructure designed to deliver real-time impact data, enabling tailored programs that drive measurable outcomes.
              </p>
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
          <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
           Mibo offers comprehensive support for 30+ mental health conditions. Explore some of the most common concerns below to see how we approach care.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900">Depression</h3>
              <p>Affects 5% million people worldwide</p>
              <p className="text-gray-600 mt-2">
               Depression is more than just feeling sad. We offer compassionate care and evidence-based treatments to help you find hope and find joy again.
              </p>
              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                TREATMENT APPORACHES
              </h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Medication Management", "LifeStyle Changes", "Support Groups"].map((item) => (
                  <span key={item} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <button className="mt-8 w-full bg-[#163A7A] hover:bg-[#102f66] text-white py-4 rounded-full font-semibold text-lg transition">
                Book Consultation
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900">Generalized Anxiety Disorder</h3>
              <p>1 in 14 people affected globally</p>
              <p className="text-gray-600 mt-2">
               Living with constant worry can be exhausting. Our specialized approaches help you manage anxiety and reclaim peace.
              </p>
              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                TREATMENT APPORACHES
              </h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {[ "Relaxation Training", "Exposure Thearapy", "Stress Management","Mindfulness techniques",].map((item) => (
                  <span key={item} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <button className="mt-8 w-full bg-[#163A7A] hover:bg-[#102f66] text-white py-4 rounded-full font-semibold text-lg transition">
                Book Consultation
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900">Obsessive Compulsive Disorder</h3>
              <p>Affects 2-3% of population</p>
              <p className="text-gray-600 mt-2">
                OCD can feel overwhelming, but you're not alone. We provide specialized therapy to break free from compulsive cycles.
              </p>
              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mt-4">
                TREATMENT APPORACHES
              </h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {["ERP Therapy", "Medication", "Mindfulness", "Habit Reversal"].map((item) => (
                  <span key={item} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <button className="mt-8 w-full bg-[#163A7A] hover:bg-[#102f66] text-white py-4 rounded-full font-semibold text-lg transition">
                Book Consultation
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========== REAL CARE ADAPTS TO YOUR LIFE ========== */}
      <section className="bg-blue-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Real care adapts to your life, your people, your pace.
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
            Care doesn’t happen in isolation. It works when it’s rooted in your everyday life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900">Personalized Care</h3>
              <p className="text-gray-600 mt-2">Tailored support that fits your life.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900">For You & Your People</h3>
              <p className="text-gray-600 mt-2">Care that is tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900">Peace of Mind</h3>
              <p className="text-gray-600 mt-2">Support that brings balance, even in difficult times.</p>
            </div>
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






      <section className="bg-white py-20 px-8">
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
      </section>



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



      {/* ========== SUBMIT APPLICATION CTA ========== */}
      <section className="bg-blue-900 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to begin your journey?</h2>
          <p className="text-blue-100 mt-2 mb-6">
            Take the first step towards better mental health.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition">
            Submit Application
          </button>
        </div>
      </section>
    </div>
  );
}
