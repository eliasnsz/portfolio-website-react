import { useContext } from 'react'
import { MenuContext } from '../../App'
import './Menu.scss'

export default function Menu() {
  
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)

  return (
    <>
      <section id='hamburguer' className={ isMenuOpen ? "open" : "close"}>
        <nav className="menu-nav">
          <ul>
            <li onClick={() => toggleMenu(false)}><a href="#firstSection-container">Início</a></li>
            <li onClick={() => toggleMenu(false)}><a href="#sobre">Sobre</a></li>
            <li onClick={() => toggleMenu(false)}><a href="#projetos">Projetos</a></li>
            <li onClick={() => toggleMenu(false)}><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </section>
    </>
  )
}