import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaAddressCard } from "react-icons/fa";
import Patients from "../../components/Patients/Patients";
import './PatientsHistory.css';


export default function PatientsHistory() {
  return (
    <>
      <Navbar />

      <div className="main-PH">
        <div className="seccion-PH">
          <span>
            <FaAddressCard />
          </span>
          <p>Pacientes</p>
        </div>

        <Patients />
      </div>
    </>
  );
}
