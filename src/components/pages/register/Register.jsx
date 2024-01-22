import React, { useState } from 'react';
import './register.css';
import Logo from '../../../assets/Logo_temporária (2).jpg';

function Register () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
                  className={name !== '' ? 'has-val input' : 'input'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>

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
                  Registrar
                </a>
              </div>

              <div className="text-center">
                <span className="posse__conta">Já possui conta?</span>
                <a href="login" className="posse__conta1">
                  Entrar
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
