import React from 'react';
import '../style/header.css'
// import Curriculo from '../img/Curriculo_Fernando_Rocha.pdf'
import logo from '../img/Sem título-1.svg'

function Header() {

  return (
    <header>
      <nav className="navbar container">
            <a href="/Home" className="logo"><img className="logo" src={ logo } alt="" /></a>
            <input type="checkbox" id="toggler" />
            <label for="toggler"><i className="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Projetos">Projetos</a></li>
                    <li><a href="/Tecnologias">Tecnologias</a></li>
                    <li><a href="/Sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
        {/* <nav>
        <a href="#">Home</a>
        <a href="#">Projetos</a>
        <a href="#">Tecnologias</a>
        <a download href={ Curriculo }>Sobre</a>
        <a href="#">Contato</a>
      </nav> */}
    </header>
  );
}

export default Header;
