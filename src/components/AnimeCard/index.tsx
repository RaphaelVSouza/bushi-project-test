import './styles.scss'

type AnimeCardProps = {
  title: string
  coverImage: {
    large: string
    small: string
  },
  episodeCount: number
  averageRating: number
}

const AnimeCard = ({ title, coverImage, averageRating, episodeCount }: AnimeCardProps) => {
  function calcStars(rating: number) {
    
      if(rating <= 25)
        return '*';
      if(rating > 25 && rating <= 50) 
        return '**';
      if(rating > 50 && rating <= 75) 
        return '***';
      if(rating > 75 && rating <= 90)
        return '****';
      if(rating > 90)
        return '*****';

      return '';

    }
  

  return (
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
          src={`${coverImage.small}`} 
          alt={`${title} cover`} 
        />
        </picture>
      </div>

      <h4 className="title">Nome: {title}</h4> 

      <img 
        className="arrow-right mobile-only" 
        src={`${process.env.PUBLIC_URL}/arrow-right.svg`} 
        alt="a arrow pointing to right"
      />

      <div className="details desktop-only">
        <p>Episódios: {episodeCount}</p>
        <p>Estrelas: {calcStars(averageRating)}</p>
      </div>

      <img 
        className="arrow-right desktop-only" 
        src={`${process.env.PUBLIC_URL}/arrow-right.svg`} 
        alt="a arrow pointing to right"
      />
    </div>
  </li>
  )
}

export default AnimeCard
