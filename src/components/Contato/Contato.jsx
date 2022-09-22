import './Contato.scss'
import Form from '../Form/Form'

export default function Contato() {
  return (
    <>
      <div className="container" id='contato'>
        <div className="limiter">
          <div className="text-container">
            <h1 data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">Contato</h1>
            <p data-aos="fade-left" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">Vamos conversar? Me mande um email.</p>
          </div>
          
          <Form />
        </div>
      </div>
    </>
  )
}