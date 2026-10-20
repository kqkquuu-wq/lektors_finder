import React, { useState } from 'react';
import '../styles/style.css';

const Auth = ({ onNavigate }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="pagecontainer">
      <div className="auth-wrapper">
        <h2 className="auth-title">Вход</h2>
        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="login" className="form-label">Логин</label>
            <input
              id="login"
              type="text"
              className="form-input"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Введите логин"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input
              id="password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>

          <button type="submit" className="btn-submit">
            Войти
          </button>

        </form>
      </div>
    </div>
  );
};

export default Auth;