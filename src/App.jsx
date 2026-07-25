import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Signup from "./pages/SignUp.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Routes>     
            <Route path="/" element={<Home/>} />
            <Route path="/SignUp" element={<Signup />} />
       <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default App;
