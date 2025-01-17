import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import './index.css'; // or './tailwind.css' if that's where you added the Tailwind directives




const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>

        {/* Footer */}
        
      </div>
    </Router>
  );
};

export default App;
