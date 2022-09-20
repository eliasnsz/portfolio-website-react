import './App.scss'
import FirstSection from './components/firstSection/FirstSection'
import Header from './components/Header/Header'
import SecondSection from './components/secondSection/SecondSection'
import ThirdSection from './components/thirdSection/ThirdSection'

function App() {
  


  return (
    <div className="App">
      <Header />
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>   
    </div>
  )
}

export default App
