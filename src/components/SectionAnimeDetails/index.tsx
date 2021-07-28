import './styles.scss'

type SectionAnimeDetailsProps = {
  title: string
  synopsis: string
  posterImage: {
    large: string
  }
}

const SectionAnimeDetails = ({ posterImage, title, synopsis }: SectionAnimeDetailsProps) => {

  return (<section className="section-anime-details">
    <div className="details">

        <img 
          className="thumbnail" 
          src={`${posterImage.large}`} 
          alt={`${title} poster`} 
        />

      <div className="text">
        <h1>Nome do anime:<br/> {title}</h1> 
        <div className="synopsis">
          <h2>Sinopse:</h2>
          <p>{synopsis}</p>
        </div>
      </div>
    </div>

    <div className="other-details">
      <ul>
        <li>Outras informações da API</li>
      </ul>
    </div>
  </section>)
}

export default SectionAnimeDetails
