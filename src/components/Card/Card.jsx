import './Card.scss'

export default function ({ img, year, title1, title2, href }) {
  return (
    <a href={href} target="_blank">
      <div id="card-container">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="text-container">
          <p>{year}</p>
          <h1>{title1} - <br /> {title2}</h1>
          <p className='cta'>Ver projeto &rarr;</p>
        </div>
      </div>
    </a>
  )
}