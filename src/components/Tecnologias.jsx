import React, {useEffect} from 'react'
import '../style/Tecnologias.css'

function Tecnologias() {
  useEffect(() => {
    const pictures = document.querySelectorAll('.Picture');
var previousTouch = undefined;

function updateElementPosition(element, event) {
  var movementX, movementY;

  if (event.type === 'touchmove') {
    const touch = event.touches[0];
    movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
    movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
    previousTouch = touch;
  } else {
    movementX = event.movementX;
    movementY = event.movementY;
  }
  
  const elementY = parseInt(element.style.top || 0) + movementY;
  const elementX = parseInt(element.style.left|| 0) + movementX;

  element.style.top = elementY + "px";
  element.style.left = elementX + "px";
}

function startDrag(element, event) {
  const updateFunction = (event) => updateElementPosition(element, event);
  const stopFunction = () => stopDrag({update: updateFunction, stop: stopFunction});
  document.addEventListener("mousemove", updateFunction);
  document.addEventListener("touchmove", updateFunction);
  document.addEventListener("mouseup", stopFunction);
  document.addEventListener("touchend", stopFunction);
}

function stopDrag(functions) {
  previousTouch = undefined;
  document.removeEventListener("mousemove", functions.update);
  document.removeEventListener("touchmove", functions.update);
  document.removeEventListener("mouseup", functions.stop);
  document.removeEventListener("touchend", functions.stop);
}

pictures.forEach(picture => {
  const range = 50;
  const randomX = Math.random() * (range * 2) - range;
  const randomY = Math.random() * (range * 2) - range;
  const randomRotate = Math.random() * (range / 2) - range / 4;
  const startFunction = (event) => startDrag(picture, event);
  picture.style.top = `${randomY}px`;
  picture.style.left = `${randomX}px`;
  picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
  picture.addEventListener("mousedown", startFunction);
  picture.addEventListener("touchstart", startFunction);
});
  
  })
  return (
    <div id='tec'>
        <h2>TECNOLOGIAS</h2>
        <div class="Containerr">
          <div class="Picture">
            <i class="devicon-css3-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-html5-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-javascript-plain colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-git-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-jest-plain colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-mocha-plain colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-react-original-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-redux-original colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-docker-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-mysql-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-nodejs-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-express-original-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-typescript-plain colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-mongodb-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-python-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-sequelize-plain-wordmark colored"></i>
          </div>
          <div class="Picture">
            <i class="devicon-heroku-plain-wordmark colored"></i>
          </div>
        </div>
    </div>
  )
}

export default Tecnologias