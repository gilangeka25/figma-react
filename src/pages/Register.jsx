import React from "react";
import "./../styles/register.css";

function RegisterForm() {
  return (
    <div className="register-wrapper">
      <form className="register-form">
        <h1>Silahkan Daftar</h1>
        <div className="register-input-box">
          <input type="text" placeholder="Masukan Username" required />
        </div>
        <div className="register-input-box">
          <input type="text" placeholder="Masukan Email" required />
        </div>
        <div className="register-input-box">
          <input type="password" placeholder="Masukan Password" required />
        </div>
        <a href="/Dashboard">
          <button type="button" className="register-btn btn-dark">
            Daftar
          </button>
        </a>
        <h4 className="register-footer-text">XI PPLG 2</h4>
      </form>
    </div>
  );
}

export default RegisterForm;
