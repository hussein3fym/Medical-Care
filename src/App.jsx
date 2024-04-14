import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MedicalLayout from "./Components/MedicalLayout.jsx";
import Generating from "./Components/Generating.jsx";
import GlobalStyles from "./GlobalStyles.js";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MedicalLayout />} />
          <Route path="/generating" element={<Generating />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
