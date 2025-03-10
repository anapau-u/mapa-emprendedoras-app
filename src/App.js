import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js"; // Adjust the path based on where Login.js is located
import Signup from "./pages/Signup.js";
import PartnersList from "./components/PartnersList"; // Import the new component
import AddPartner from "./components/AddPartner";
import ModifyPartner from './components/ModifyPartner';
import "./App.css"; // Keep your existing styles if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/partners" element={<PartnersList />} />
        <Route path="/modify/:id" element={<ModifyPartner />} />
        <Route path="/new-partner" element={<AddPartner />} /> {/* New route */}
        {/* Add other routes here as your app grows */}
      </Routes>
    </Router>
  );
}

export default App;