import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./PatientsHistory.css";
import Menu from "../../components/MenuTablas/Menu";

export default function PatientsHistory() {
  return (
    <>
      <Navbar />

      <div className="main-PH">
        <Menu />
      </div>
    </>
  );
}
