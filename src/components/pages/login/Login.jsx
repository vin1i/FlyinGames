import React, { useState } from 'react';
import './login.css';
import Logo from '../../../assets/Logo_temporária (2).jpg';

function Login  ()  {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="section__container">
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Bem Vindo</span>

              <span className="login-form-title">
                <img src={Logo} alt="Logo" />
              </span>

              <div className="wrap-input">
                <input
                  className={email !== '' ? 'has-val input' : 'input'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== '' ? 'has-val input' : 'input'}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <a href="home" className="login-form-btn">
                  Login
                </a>
              </div>

              <div className="text-center">
                <span className="posse__conta">Não possui conta?</span>
                <a href="register" className="posse__conta1">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
