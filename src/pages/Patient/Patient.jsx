import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Patients from '../../components/Patients/Patients';
import { FaAddressCard } from "react-icons/fa";
import './Patient.css'

export default function Patient() {
  return (
    <>
        <Navbar />

        <div className="main-Patient">
        <div className="seccion-Patient">
          <span>
            <FaAddressCard />
          </span>
          <p>Miembros</p>
        </div>
            <Patients />
        </div>
    </>
  )
}
