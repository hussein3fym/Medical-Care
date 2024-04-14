// MedicalLayout.jsx
import React from "react";
import "./../styles/Generating.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header.Jsx"; // Corrected import path
import SideNav from "./SideNav.jsx"; // Corrected import path
import Generating from "./Generating.jsx";

const MedicalLayout = () => {
  return (
    <div className="Dashboard">
      <Header />
      <SideNav />
      <main className="main">
        <Container className="container__dashboard">
          <Generating />
        </Container>
      </main>
    </div>
  );
};

export default MedicalLayout;
