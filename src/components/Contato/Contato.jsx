import './Contato.scss'
import Form from '../Form/Form'

export default function Contato() {
  return (
    <>
      <div className="container" id='contato'>
        <div className="limiter">
          <div className="text-container">
            <h1>Contato</h1>
            <p>Vamos conversar? Me mande um email.</p>
          </div>
          
          <Form />
        </div>
      </div>
    </>
  )
}