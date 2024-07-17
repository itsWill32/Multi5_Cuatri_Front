import React from "react";
import "./Login.css";
import { FaEnvelope, FaFacebook, FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {

  return (
    <>
      <div className="main">

        <div className="data-Login">
          <h1>INICIE SESION</h1>

          <div className="icons-Login">
            <span className="icon"><FaFacebook/></span>
            <span className="icon"><FaGoogle/></span>
            <span className="icon"><FaLinkedin/></span>
          </div>

          <span style={{marginTop: '-30px'}}>
            <p>o utilice su correo electronico para ingresar</p>
          </span>

          <div className="form-Login">
            <form action="Login">

              <div className="data-Email">
                <FaEnvelope className="icon-Email" />
                <input type="email" name="email" className="input-Email" placeholder="email" />
              </div>

              <div className="data-Password">
                <FaLock className="icon-Password" />
                <input type="password" name="password" className="input-Password" placeholder="password" />
              </div>

            </form>
          </div>

          <span style={{marginBottom: '-50px'}}>
            <p>¿Olvido su contraseña? Recupere aqui</p>
          </span>

          <div className="button-Login">
            <button type="submit">
              <Link to='/Home' style={{color:'white'}}>Ingresar </Link>
              </button>
          </div>
        </div>

        <div className="data-Emp">

          <span className="logo-Emp">
            <img src="/Logo.png" alt="Logo" />
          </span>

          <div className="data-Register">

            <h2>¡HOLA!</h2>
            <p>Introduzca sus datos personales y empiece el viaje con</p>
            <p style={{marginTop:'-50px'}}>nosotros</p>

            <div className="button-Register">
              <button type="submit">
                <Link to='/Register' style={{color:'white'}} >Registrarese</Link>
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;
