// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Map from "./components/Map/Map";
import StatusComponent from "./components/Navbar/StatusComponent";
import CriteriaComponent from "./components/Navbar/CriteriaComponent";
import EquipmentEntry from "./components/EntryForms/EquipmentEntry";

import Mappage from "./pages/mappage";
Mappage


const App = () => {
  return (
    <Router>
      <div className="relative w-screen h-screen">
        <Navbar />
        <Routes>
          {/* Define the default route */}
          <Route path="/" element={<Mappage />} />
          {/* Define route for the EquipmentEntry page */}
          <Route path="/equipment-entry" element={<EquipmentEntry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
