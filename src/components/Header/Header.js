import React from 'react';
import './Header.css';

function Header() {
  const cursos = [
    'Ciência da Computação',
  ];

  return (
    <div className="header-navbar">
      <div className="header-logo">
        <img src="./logo.png" alt="Logo UFFS" />
      </div>
      <div className="header-dropdown">
        <select id="dropdown-cursos" className="header-dropdown-select">
          <option disabled>Selecione o curso</option>
          {cursos.length > 0 ? (
            cursos.map((curso, index) => (
              <option key={index} value={curso}>{curso}</option>
            ))
          ) : (
            <option selected disabled>Nenhum curso cadastrado</option>
          )}
        </select>
      </div>
      <div className="header-checkbox">
        <div className="header-checkbox-switch">
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;

