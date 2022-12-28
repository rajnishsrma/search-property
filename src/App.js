import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Landing/>} />
               <Route path="/admin" element={<Admin/>} />

               <Route path="/signup" element={<Signup/>} />
               <Route path="/login" element={<Login/>} />

               <Route path="/about" element={<AboutUs/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
