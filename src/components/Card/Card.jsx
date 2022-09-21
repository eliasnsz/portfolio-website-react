import './Card.scss'

export default function ({dataAos, img, year, title, desc, hrefGit, hrefProject }) {
  return (
    <>
      <div id="card-container"
        data-aos={dataAos}
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div style={{ backgroundImage: `url(${img})`}} 
        className="img-area">

        </div>
          <div className="text-area">
            <div className="text-container">
              <p>{year}</p>
              <h1>{title}</h1>
              <p>
                {desc}
              </p>
            </div> 
          </div>
          <hr />
        <div className="card-footer">
          <button>
            <a href={hrefGit} target="_blank">
              Código fonte
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="32px" height="32px" viewBox="0 0 32 32">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
              </svg>
            </a>
          </button>
          <button>
            <a href={hrefProject} target="_blank">
              Projeto
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><title/><g fill='none' fillRule="evenodd" id="页面-1" stroke="none" strokeWidth="1"><g id="导航图标" stroke="#fff" strokeWidth="1.5" transform="translate(-177.000000, -334.000000)"><g id="官方网站" transform="translate(177.000000, 334.000000)"><g id="编组" transform="translate(3.000000, 4.000000)"><rect height="4.5" id="矩形" strokeLinecap="round" strokeLinejoin="round" width="5" x="7" y="12"/><rect height="12" id="矩形" rx="1" width="19" x="0" y="0"/><line id="路径" strokeLinecap="round" strokeLinejoin="round" x1="8.5" x2="10.5" y1="9.5" y2="9.5"/><line id="路径" strokeLinecap="round" strokeLinejoin="round" x1="4.5" x2="14.5" y1="16.5" y2="16.5"/></g></g></g></g></svg>
            </a>
          </button>
        </div>
      </div>
    </>
  )
}