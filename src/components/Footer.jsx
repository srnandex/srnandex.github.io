import React from 'react'
import '../style/Footer.css'

function Footer() {

  return (
    <footer className="footer">
        <span className="copyright">&copy; {new Date().getFullYear()} Fernando Rocha</span>
        <ul className="footer__list">
            <li className="footer__list-item">
                <a target="_blank" href="https://www.linkedin.com/in/nando-rocha/" className="footer__list-link">
                    <i className="ri-linkedin-line"></i>
                </a>
            </li>
            <li className="footer__list-item">
                <a target="_blank" href="https://github.com/srnandex" className="footer__list-link">
                    <i className="ri-github-line"></i>
                </a>
            </li>
            <li className="footer__list-item">
                <a target="_blank" href="https://www.instagram.com/fsrocha_/" className="footer__list-link">
                    <i className="ri-instagram-line"></i>
                </a>
            </li>
        </ul>
        <button 
            className='vltopo ri-arrow-line' 
            onClick={() => window.scrollTo(0, 0)}>
            <span className='ri-arrow-up-line'></span>
        </button>
    </footer>
  )
}

export default Footer