import './styles.scss'

type AnimeCardProps = {
  title: string
  coverImage: {
    large: string
    tiny: string
  },
  posterImage: {
    large: string
    tiny: string
  }
  synopsis: string
  episodeCount: number
  averageRating: number
}

const AnimeCard = ({ title, coverImage, posterImage, averageRating, episodeCount, synopsis }: AnimeCardProps) => (
  <li className="anime-card">
    <div className="anime-card__content">
      <div className="image-container">
        <picture>
          <source 
            srcSet={`${coverImage.large}`} 
            media="(min-width: 1440px)" 
          />
        <img 
          className="thumbnail" 
          src={`${coverImage.tiny}`} 
          alt={`${title} cover`} 
        />
        </picture>
      </div>
      {console.log({title})}
      <h4 className="title">Nome: {title}</h4> 

      <img 
        className="arrow-right mobile-only" 
        src={`${process.env.PUBLIC_URL}/arrow-right.svg`} 
        alt="a arrow pointing to right"
      />

      <div className="details desktop-only">
        <p>Episódios: {episodeCount}</p>
        <p>Estrelas: **</p>
      </div>
    </div>
  </li>
)

export default AnimeCard
