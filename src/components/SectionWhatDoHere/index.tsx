import './styles.scss'

const SectionWhatDoHere = () => (
  <section id="what-do-here" className="section-what-do-here">
    <h2>o que fazer por aqui?</h2> 
    <div className="container">
      <article className="the-best">
        <img 
          className="the-best__icon" 
          src={`${process.env.PUBLIC_URL}/fire.svg`} 
          alt="a fire illustration" 
        />
        <div className="the-best__text-wrapper">
          <h3 className="title">Os Melhores</h3>
          <p className="text">Veja o que esta pegando fogo, no mundo dos animes. Os animes mais bem avaliados pela galera!</p>
        </div>
      </article>

      <article className="info">
        <img 
          className="info__icon" 
          src={`${process.env.PUBLIC_URL}/infinite.svg`} 
          alt="a infinite symbol" 
        />
        <div className="info__text-wrapper">
          <h3 className="title">Informações</h3>
          <p className="text">Procure informações dos seus animes  preferidos.</p>
        </div>
      </article>
      
      <article className="your-list">
        <img 
          className="your-list__icon"
          src={`${process.env.PUBLIC_URL}/dragon.svg`} 
          alt="a dragon illustration" />
        <div className="your-list__text-wrapper">
          <h3 className="title">Sua Lista</h3>
          <p className="text">Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um episódio novo for ao ar!</p>
        </div>
      </article>

    </div>
  </section>
)

export default SectionWhatDoHere
