import React, { useState, useEffect } from "react";
import { FaTemperatureHigh, FaHeartbeat } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import "./Sensors.css";

export default function Sensors() {
  const [temperature, setTemperature] = useState(null);
  const [oxygenation, setOxygenation] = useState(null);
  const [heartRate, setHeartRate] = useState(null);

  useEffect(() => {
    const fetchSensorData = () => {
      setTemperature(36.5);
      setOxygenation(98);
      setHeartRate(72);
    };

    fetchSensorData();

    const interval = setInterval(fetchSensorData, 10000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="main-sensors">
      <div className="temperature">
        <h3>Temperatura</h3>
        <span>
          <FaTemperatureHigh />
        </span>
        <p>{temperature ? `${temperature} °C` : "Cargando..."}</p>
      </div>

      <div className="oxygenation">
        <h3>Oxigenación en la Sangre</h3>
        <span>
          <VscGraphLine />
        </span>
        <p>{oxygenation ? `${oxygenation} %` : "Cargando..."}</p>
      </div>

      <div className="heartRate">
        <h3>Frecuencia Cardiaca</h3>
        <span>
          <FaHeartbeat />
        </span>
        <p>{heartRate ? `${heartRate} bpm` : "Cargando..."}</p>
      </div>
    </div>
  );
}
