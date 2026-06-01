//import Header from "../Header";
//import Footer from "../Footer";
//import Header from "..components/layout/Header";
import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
 return (
    // <div className="min-h-screen flex bg-gray-100">
    <div>
        <header>
            <Header/>
        </header>
           

        {/* Page Content */}
         <main className="flex-1 overflow-y-auto p-6"> 
            {/* <main> */}
          <Outlet />
        </main>

        <footer>
            <Footer/>
        </footer>
            
    </div>
 )
}