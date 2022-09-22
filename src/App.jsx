import { createContext } from 'react'
import './App.scss'
import Contato from './components/Contato/Contato'
import FirstSection from './components/firstSection/FirstSection'
import Header from './components/Header/Header'
import SecondSection from './components/secondSection/SecondSection'
import ThirdSection from './components/thirdSection/ThirdSection'

export const MenuContext = createContext()

function App() {


  return (
    <div className="App">
      <Header />
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Contato />
      </div>   
    </div>
  )
}

export default App
