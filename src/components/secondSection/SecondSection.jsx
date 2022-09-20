import './SecondSection.scss'

export default function SecondSection() {
  return (
    <>
      <div className='container' id='sobre'>
        <div className='limiter'>
          <div className="text-container">
            <h1 data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">Sobre mim</h1>
            <p  data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">
              Me chamo Elias, tenho 20 anos, sou desenvolvedor front-end e músico nas horas 
              vagas. Meu primeiro contato com a programação foi ainda no ensino 
              fundamental, treinando lógica de programação no software <a href="https://scratch.mit.edu/" target="_blank">Scratch</a>, 
              onde depositava muito tempo criando jogos e me divertindo. No 
              entanto, comecei a me aprofundar em 2020 quando conheci os cursos 
              de <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank">HTML, CSS3</a> e <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" target="_blank">Javascript</a> do <a href="https://www.youtube.com/c/CursoemV%C3%ADdeo" target="_blank">CursoEmVideo</a> e 
              imediatamente me apaixonei pela área. Desde então venho estudando e me aprofundando cada vez mais.
            </p>
            <br />
            <p  data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">Minha escolha em relação ao front-end foi motivada pelo fato de 
              eu sempre ter gostado muito de audiovisuais. Tenho costume de editar 
              vídeos, fazer montagens e isso me deu uma certa facilidade para me 
              adaptar ao front-end. Contudo já iniciei meus estudos sobre back-end 
              e com certeza tenho planos para me aprofundar no mesmo também.</p>
              <br />
            <p  data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">
              Em relação à minha formação, tenho certificações pelas instituições: <a href="https://www.youtube.com/c/CursoemV%C3%ADdeo" target="_blank">CursoEmVideo</a> e <a href="https://onebitcode.com/lp/" target="_blank">OneBitCode</a>, aquela onde adquiri conhecimento sobre a base da web e essa onde me aprofundei
              estudando tecnologias como: <em>Sass</em>, <em>Bootstrap</em>, <em>React</em> e <em>NodeJS</em>.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <img src="../public/perfil.png" alt="foto-perfil" />
          </div>
        </div>
      </div>
    </>
  )
}