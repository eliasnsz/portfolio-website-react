import { createContext, useState } from 'react'
import './App.scss'
import Contato from './components/Contato/Contato'
import FirstSection from './components/firstSection/FirstSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SecondSection from './components/secondSection/SecondSection'
import ThirdSection from './components/thirdSection/ThirdSection'

export const MenuContext = createContext()

function App() {

  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <div onLoad={() => window.scrollTo(0,0)} className="App">
      <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
        <Header />
      </MenuContext.Provider>
      <div className='no-scroll'>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Contato />
        <Footer/>
      </div>   
    </div>
  )
}

export default App
