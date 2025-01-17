import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Foro from "../../components/Foro/Foro";
import { FaAddressCard } from "react-icons/fa";
import "./ForoHistory.css";

export default function ForoHistory() {
  return (
    <>
      <Navbar />

      <div className="main-FH">
        <div className="seccion-FH">
          <span>
            <FaAddressCard />
          </span>
          <p>Foro</p>
        </div>

        <Foro />
      </div>
    </>
  );
}
