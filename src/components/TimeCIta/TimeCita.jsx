import React from "react";
import "./TimeCita.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

export default function TimeCita() {
  return (
    <>
      <div className="main-Time">
        <div className="morning-Time">
          <div className="data-Morning">
            <div className="icon-text">
              <span><MdOutlineWbSunny className="icon" /></span>
              <h2>Día</h2>
            </div>
            <p>9:00 AM a 2:00 PM</p>
          </div>
          <div className="container-Morning">
            <button className="time-button">9:00 AM</button>
            <button className="time-button">9:30 AM</button>
            <button className="time-button">10:00 AM</button>
            <button className="time-button">10:30 AM</button>
            <button className="time-button">11:00 AM</button>
            <button className="time-button">12:00 PM</button>
            <button className="time-button">12:30 PM</button>
            <button className="time-button">1:00 PM</button>
            <button className="time-button">1:30 PM</button>
            <button className="time-button">2:00 PM</button>
          </div>
        </div>
        <div className="evening-Time">
          <div className="data-Evening">
            <div className="icon-text">
              <span><IoMoonOutline className="icon" /></span>
              <h2>Tarde - Noche</h2>
            </div>
            <p>4:00 PM a 9:00 PM</p>
          </div>
          <div className="container-Evening">
            <button className="time-button">4:00 PM</button>
            <button className="time-button">4:30 PM</button>
            <button className="time-button">5:00 PM</button>
            <button className="time-button">5:30 PM</button>
            <button className="time-button">6:00 PM</button>
            <button className="time-button">6:30 PM</button>
            <button className="time-button">7:00 PM</button>
            <button className="time-button">7:30 PM</button>
            <button className="time-button">8:00 PM</button>
            <button className="time-button">8:30 PM</button>
            <button className="time-button">9:00 PM</button>
          </div>
        </div>
      </div>
    </>
  );
}
