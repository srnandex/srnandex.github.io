import React from 'react';
import logo from '../img/Sem título-1.svg'
import '../style/header.css'

function Header() {

  return (
    <header>
      <a href="#" className='div-name'>
      <img id='logo' src={ logo } alt="logo" />
      <h1>Fernando Rocha</h1>
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#">Projetos</a>
        <a href="#">Tecnologias</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
