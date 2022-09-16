import { useState } from 'react'
import './HamburguerMenu.scss'

export default function HamburguerMenu() {

  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <>
      <div id="menu-icon">
        <button id='menu-button' onClick={() => toggleMenu(!isMenuOpen)} className={isMenuOpen ? "open" : ""} >
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </button>
      </div>
      <section id='menu-container' className={isMenuOpen ? "open" : "close"}>
        <ul>
          <li>Inicio</li>
          <li>Projetos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </section>
    </>
  )
}