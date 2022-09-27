import './ThirdSection.scss'
import Card from '../Card/Card'

export default function ThirdSection() {
  return (
    <>
      <div className="container" id='projetos'>
        <div className="limiter">
          <div className="text-container">
            <h1 data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true">Projetos</h1>
            <p data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true" id='desc'>Meus projetos finalizados ou que estão em andamento</p>
            
            <div className="grid-container">
              <Card 
                dataAos={"fade-up-right"}
                img={"https://i.imgur.com/iKS9ybE.jpg"}
                year={"2022"}
                title={"Creative Cloud Clone"}
                desc={`Clone totalmente responsivo do website da Creative Cloud, 
                  pertencente à Adobe. Esse projeto foi feito com a intenção de me 
                  desafiar e aprimorar meus conhecimentos sobre ReactJS e design. Aprendi muito com ele.`}
                hrefGit={"https://github.com/eliasnsz/creative-cloud-website-clone"}
                hrefProject={"https://creative-cloud-website-clone.vercel.app/"}
              />
              <Card
                dataAos={"fade-up-left"}
                img={"https://i.imgur.com/t07qxhU.jpg"}
                year={"2022 (Em Desenvolvimento)"}
                title={"Valorant Wiki"}
                desc={`Criado com ReactJS e sem back-end, o projeto conta com páginas geradas dinâmicamente fazendo consumo da Valorant-API. Iniciei esse projeto com objetivo de evoluir minhas habilidades com consumo de API.`}
                hrefGit={"https://github.com/eliasnsz/valorant-wiki"}
                hrefProject={"https://valorant-wiki-zhtd.vercel.app/"}
              />
              <Card
                dataAos={"fade-up-right"}
                img={"https://i.imgur.com/FcuT1Su.png"}
                year={"----"}
                title={"Em breve"}
                desc={`...`}
                hrefGit={"#"}
                hrefProject={"#"}
              />
              <Card
                dataAos={"fade-up-left"}
                img={"https://i.imgur.com/FcuT1Su.png"}
                year={"----"}
                title={"Em breve"}
                desc={`...`}
                hrefGit={"#"}
                hrefProject={"#"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}