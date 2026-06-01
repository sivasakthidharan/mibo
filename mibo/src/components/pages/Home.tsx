//import { Shield, Calendar, Users, HeartHandshake } from "lucide-react";

import { Star, MapPin, Wifi, Coffee, Car, Accessibility, Building, Library, TreePine, Dumbbell, } from "lucide-react";
import coverImage from "../../assets/coverImage.jpg";
import MIBOOFFICE from "../../assets/miboOffice.jpg";

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
            Tailored for those who lead, seek, and listen
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
                Tailored experiences for all ages, focusing on mental and long‑term personal goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Couples</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Strengthen your bond, resolve challenges, and grow together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Children</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Engaging, age‑appropriate activities that support emotional development and social skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">For Corporate</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Empowering mental wellness programs, leadership development, and mental health education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MENTAL HEALTH CONCERNS WE CARE FOR ========== */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center">
            Mental Health Concerns <span className="text-green-500">We Care For</span>
          </h2>
          <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
            We offer comprehensive support for 100+ mental health conditions. Explore some common concerns below.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900">Depression</h3>
              <p className="text-gray-600 mt-2">
                Symptoms include persistent sadness, loss of interest, and changes in appetite and sleep patterns.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900">Anxiety Disorder</h3>
              <p className="text-gray-600 mt-2">
                Symptoms include excessive worry, restlessness, and difficulty concentrating.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900">Obsessive‑Compulsive Disorder</h3>
              <p className="text-gray-600 mt-2">
                Symptoms include intrusive thoughts and compulsive behaviors.
              </p>
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
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-2xl font-bold text-blue-900">Care in your language, built for your life</h3>
              <p className="text-gray-600 mt-3">
                We work with you to understand your needs and provide tailored support. We’re here to help you live your life to the fullest.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🫂</div>
              <h3 className="text-2xl font-bold text-blue-900">Support shaped around you</h3>
              <p className="text-gray-600 mt-3">
                We work with you to understand your needs and provide tailored support. We’re here to help you live your life to the fullest.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-blue-900">Care that includes your loved ones</h3>
              <p className="text-gray-600 mt-3">
                We work with you to understand your needs and provide tailored support. We’re here to help you live your life to the fullest.
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
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
        {/* Top half: image */}
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${MIBOOFFICE})` }}
        ></div>
        
        {/* Bottom half: white content */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-blue-900">Bengaluru</h3>
            <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-sm font-semibold text-gray-700">4.8</span>
              <span className="text-xs text-gray-500 ml-1">(642)</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Our Bengaluru centres offer professional mental health care in a serene environment.
          </p>
          
          <div className="mt-4">
            <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">LOCATIONS IN BENGALURU</h4>
            <ul className="mt-2 space-y-1">
              {["Indiranagar", "Whitefield", "Koramangala", "Jayanagar"].map((loc) => (
                <li key={loc} className="text-gray-600 text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-2 text-green-500" /> {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">AMENITIES</h4>
            <div className="flex flex-wrap gap-3 mt-2">
              <Car className="w-5 h-5 text-gray-500" title="Free Parking" > Free </Car>
              <Accessibility className="w-5 h-5 text-gray-500" title="Wheelchair Accessible" />
              <Building className="w-5 h-5 text-gray-500" title="AC Consultation Rooms" />
              <Coffee className="w-5 h-5 text-gray-500" title="Waiting Lounge" />
            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-green-700 text-white font-medium text-sm py-2 px-4 rounded-full transition flex items-center justify-center gap-2 w-fit">
            View Centre Details <span>→</span>
          </button>
        </div>
      </div>

      {/* Mumbai Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${MIBOOFFICE})` }}
        ></div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-blue-900">Mumbai</h3>
            <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-sm font-semibold text-gray-700">4.7</span>
              <span className="text-xs text-gray-500 ml-1">(289)</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Find peace and professional care at our Mumbai locations.
          </p>
          
          <div className="mt-4">
            <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">LOCATIONS IN MUMBAI</h4>
            <ul className="mt-2 space-y-1">
              {["Bandra", "Powai", "Andheri", "Lower Parel"].map((loc) => (
                <li key={loc} className="text-gray-600 text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-2 text-green-500" /> {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">AMENITIES</h4>
            <div className="flex flex-wrap gap-3 mt-2 items-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span className="text-xs text-gray-600">Metro Access</span>
              <Coffee className="w-5 h-5 text-gray-500" title="Cafeteria" />
              <span className="text-xs text-gray-600">Valet Parking</span>
              <Library className="w-5 h-5 text-gray-500" title="Library" />
            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-green-700 text-white font-medium text-sm py-2 px-4 rounded-full transition flex items-center justify-center gap-2 w-fit">
            View Centre Details <span>→</span>
          </button>
        </div>
      </div>

      {/* Kochi Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${MIBOOFFICE})` }}
        ></div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-blue-900">Kochi</h3>
            <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-sm font-semibold text-gray-700">4.9</span>
              <span className="text-xs text-gray-500 ml-1">(153)</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Experience compassionate care in our Kochi facilities designed for professional care.
          </p>
          
          <div className="mt-4">
            <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">LOCATIONS IN KOCHI</h4>
            <ul className="mt-2 space-y-1">
              {["Marine Drive", "Kakkanaad", "Ernakulam", "Edappally"].map((loc) => (
                <li key={loc} className="text-gray-600 text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-2 text-green-500" /> {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">AMENITIES</h4>
            <div className="flex flex-wrap gap-3 mt-2">
              <TreePine className="w-5 h-5 text-gray-500" title="Sea View" />
              <span className="text-xs text-gray-600">Garden Area</span>
              <Dumbbell className="w-5 h-5 text-gray-500" title="Yoga Studio" />
              <span className="text-xs text-gray-600">Meditation Space</span>

            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-green-700 text-white font-medium text-sm py-2 px-4 rounded-full transition flex items-center justify-center gap-2 w-fit">
            View Centre Details <span>→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>





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
