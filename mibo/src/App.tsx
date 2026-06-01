import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext"; 
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;