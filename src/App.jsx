import './App.scss'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header/>

      <video preload="metadata" playsInline controls autoPlay>
        <source src='' />
      </video>
    </div>
  )
}

export default App
