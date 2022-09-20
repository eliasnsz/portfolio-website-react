import './FirstSection.scss'

export default function FirstSection() {
  return (
    <>
      <div id='firstSection-container'>
        <div className="limiter">
          <div className="flex-container">
            <div className="text-container">
              <h3 id='animate' className='onLoadAnimation' style={{ animationDelay: "0.8s" }}>Elias Souza</h3>
              <h1 id='animate' className='onLoadAnimation' style={{ animationDelay: "1s" }}>Desenvolvedor Front-end</h1>
              <p id='animate' className='onLoadAnimation' style={{ animationDelay: "1.2s" }}>
              Sou desenvolvedor front-end júnior, 
              apaixonado por tecnologia e por
              conhecimento. Almejo uma oportunidade
              onde eu possa mostrar minhas capacidades e
              agregar ao máximo à empresa e à equipe.
              </p>
              <div className='onLoadAnimation' style={{ animationDelay: "1.4s" }} id="social-media">
                <a href="https://github.com/eliasnsz" target="_blank">
                  <img  src="https://img.icons8.com/glyph-neue/344/github.png" alt="github-logo" />
                </a>
                <a href="https://www.linkedin.com/in/elias-souza-522a95242/" target="_blank">
                  <img src="https://img.icons8.com/glyph-neue/344/linkedin-circled.png" alt="linkedin-logo" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5519971495393" target="_blank">
                  <img src="https://img.icons8.com/ios-glyphs/344/whatsapp.png" alt="whatsapp-logo" />
                </a>
              </div>
            </div>
            <div id="video-container">
              <video preload='metadata' muted autoPlay playsInline >
                <source src='https://i.imgur.com/IffDNWR.mp4'/>
              </video>
            </div>
          </div>
            <div id='scrollTo' className='onLoadAnimation' style={{ animationDelay: "1.6s" }}>
              <button onClick={ () => window.location = "#sobre"}></button>
            </div>
        </div>
      </div>
    </>
  )
}