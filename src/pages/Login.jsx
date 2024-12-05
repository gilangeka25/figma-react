
import React from 'react';
import '../styles/login.css'; 

const Login = () => {
  const handleLogin = () => {
    window.location.href = '/dashboard'; // Fungsi untuk navigasi
  };

  return (
    <div className="wrapper">
      <div className="login-page">
        <form>
          <h1>Silahkan Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Masukan Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Masukan Password" required />
          </div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleLogin} // Fungsi untuk navigasi
          >
            Log in
          </button>
          <div className="register-link">
            <p>Don't have an account?</p>
            <a href="/Register">Register</a>
          </div>
          <h4>XI PPLG 2</h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
