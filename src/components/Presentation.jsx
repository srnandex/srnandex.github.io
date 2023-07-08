import React, {useEffect} from 'react'
import logo from '../img/Sem título-1.svg'
import '../style/Presentation.css'
import RedeConnect from '../img/connection_png_313644.png'

function Presentation() {
    useEffect(() => {
        const container = document.querySelector('#inf');
        const card = document.querySelector('#conection');
      
        const { width, height } = container.getBoundingClientRect();
      
        const efeito = (event) => {
          const { offsetX, offsetY } = event;
      
          card.style.setProperty('--x-pos', (offsetX / width) - 0.3);
          card.style.setProperty('--y-pos', (offsetY / height) - 0.3);
      }
      
      container.addEventListener('mousemove', efeito)
      
      })

  return (
    <div id='inf'>
      <div className='name-logo'>
        <div className='pulse'>
          <img id='logo2' src={ logo } alt="logo" />
        </div>
        <p className='name_animation'>Fernando Rocha</p>
        <p className='name_fullstack'>DESENVOLVEDOR FULL STACK</p>
      </div>
      <img id='conection' src={ RedeConnect } alt="conect" />
    </div>
  )
}

export default Presentation