import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CiMicrochip } from "react-icons/ci";
import Sensors from "../../components/Sensors/Sensors";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="main-Home">
        <div className="seccion-Home">
          <span>
            < CiMicrochip/>
          </span>
          <p>Sensores</p>
        </div>

        <Sensors />

        </div>
    </>
  );
}
