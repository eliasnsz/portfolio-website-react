import './ThirdSection.scss'
import Card from '../Card/Card'

export default function ThirdSection() {
  return (
    <>
      <div className="container" id='projetos'>
        <div className="limiter">
          <div className="text-container">
            <h1>Projetos</h1>
            <p id='desc'>Meus projetos finalizados ou que estão em andamento</p>
            
            <div className="grid-container">
              <Card 
                img={"../../../public/adobe-mockup.jpg"}
                year={"2020"}
                title1={"Creative Cloud"}
                title2={"Website Clone"}
                href={"https://creative-cloud-website-clone.vercel.app/"}
            />
            <Card 
              img={"https://st.depositphotos.com/1004338/3764/v/600/depositphotos_37647531-stock-illustration-gray-background.jpg"}
              year={"----"}
              title1={"Em breve"}
              title2={""}
              href={""}
            />
            <Card 
              img={"https://st.depositphotos.com/1004338/3764/v/600/depositphotos_37647531-stock-illustration-gray-background.jpg"}
              year={"----"}
              title1={"Em breve"}
              title2={""}
              href={""}
            />
            <Card 
              img={"https://st.depositphotos.com/1004338/3764/v/600/depositphotos_37647531-stock-illustration-gray-background.jpg"}
              year={"----"}
              title1={"Em breve"}
              title2={""}
              href={""}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}