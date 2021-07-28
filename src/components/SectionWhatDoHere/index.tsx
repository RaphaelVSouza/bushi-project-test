import './styles.scss'

const SectionWhatDoHere = () => (
  
  <section className="what-do-here">
    <h1>O que fazer por aqui?</h1>
    <ul>
      <li className="item">
        <img  
          id="fire-icon"
          src={`${process.env.PUBLIC_URL}/fire.svg`} 
          alt="Ilustração de uma chama" 
        />
        <div>
          <h2>Os melhores</h2>
          <p>Veja o que esta pegando fogo, no mundo dos animes. Os animes mais bem avaliados pela galera!</p>
        </div>
      </li>
      <li className="item">
        <img 
          id="infinite-icon"
          src={`${process.env.PUBLIC_URL}/infinite.svg`} 
          alt="Um símbolo de infinito" 
        />
        <div>
          <h2>Informações</h2>
          <p>Procure informações dos seus animes  preferidos.</p>
        </div>
      </li>
      <li className="item">
        <img 
          id="dragon-icon"
          src={`${process.env.PUBLIC_URL}/dragon.svg`} 
          alt="Uma ilustração de um dragão" 
        />
        <div>
          <h2>Sua Lista</h2>
          <p>Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um episódio novo for ao ar!</p>
        </div>
      </li>
    </ul>
  </section>
)

export default SectionWhatDoHere
