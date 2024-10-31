// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import EquipmentEntry from "./components/EntryForms/EquipmentEntry";
import Mappage from "./pages/mappage";
import DataTable from "./components/Table/DataTable";
const App = () => {
  return (
    <Router>
      <div className="relative w-screen h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Mappage />} />
          <Route path="/equipment-entry" element={<EquipmentEntry />} />
          <Route path="/table" element={<DataTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;