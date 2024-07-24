import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Calendar from '../../components/Calendar/Calendar';
import TimeCita from '../../components/TimeCIta/TimeCita';
import './AddCita.css';

export default function AddCita() {
  return (
    <>
      <Navbar />

      <div className="main-AddQoute">
      <Calendar />

      <TimeCita />
      </div>
    </>
  )
}
