import React from "react";
import "./Register.css";
import { FaEnvelope, FaFacebook, FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


export default function Register() {
  return (
    <>
      <div className="main">

        <div className="data-Emp">
          <span className="logo-Emp">
            <img src="/Logo.png" alt="Logo" />
          </span>

          <div className="data-Login">
            <h2>¡BIENVENIDO DE NUEVO!</h2>
            <p>Para mantenerse en monitoreo con nosotros inicie,</p>
            <p style={{marginTop: '-50px'}}>sesion con su cuenta personal</p>

            <div className="button-Login">
              <button type="submit">
                <Link to="/" style={{ color: "white" }}>
                  Inicie Sesion
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="data-Register">
          <h1>CREAR CUENTA</h1>

          <div className="icons-Register">
            <span className="icon">
              <FaFacebook />
            </span>
            <span className="icon">
              <FaGoogle />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>

          <span style={{ marginTop: "-30px" }}>
            <p>o utilice su correo electronico para ingresar</p>
          </span>

          <div className="form-Register">

            <form action="Login">

              <div className="data-User">
                <FaUser className="icon-User" />
                <input
                  type="String"
                  name="user"
                  className="input-User"
                  placeholder="User"
                />
              </div>
              <div className="data-Phone">
                <FaPhoneAlt className="icon-Phone" />
                <input
                  type="text"
                  name="number-Phone"
                  className="input-Phone"
                  placeholder="Phone"
                />
              </div>

              <div className="data-Email">
                <FaEnvelope className="icon-Email" />
                <input
                  type="email"
                  name="email"
                  className="input-Email"
                  placeholder="Email"
                />
              </div>
              <div className="data-Password">
                <FaLock className="icon-Password" />
                <input
                  type="password"
                  name="password"
                  className="input-Password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>

          <div className="button-Register">
            <button type="submit">
              <Link to="/Home" style={{ color: "white" }}>
                Unirse
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
