import './Form.scss'

export default function Form() {
  return (
    <>
      <div className="form-container" data-aos="fade-up" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">
        <form action="https://formsubmit.co/eliasnsouza1245@gmail.com" method="POST">
          <div className='input-container'>
            <label>
              Nome:
              <input placeholder='Qual o seu nome?' required name="Nome" id="name" autoComplete='name'/>
            </label>
          </div>
          <div className='input-container'>
            <label>
              Email:
              <input placeholder='Qual o seu email?' required name="Email" id="email" autoComplete='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            </label>
          </div>
          <div className='input-container'>
            <label>
              Assunto:
              <input required placeholder='' type="text" name="Assunto" id="assunto" autoComplete='none'/>
            </label>
          </div>
          <div className='input-container'>
            <label>
              Mensagem:
              <textarea required name="Mensagem" id="msg" col="10" rows="3" ></textarea>
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}