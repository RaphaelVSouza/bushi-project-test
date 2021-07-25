import './styles.scss'

const AnimeCard = () => (
<li className="anime-card">
          <div className="anime-card__content">

            <picture>
            <source 
              srcSet={`${process.env.PUBLIC_URL}/anime-desktop.png`} 
              media="(min-width: 1024px)" 
            />
      
            <img 
              className="thumbnail" 
              src={`${process.env.PUBLIC_URL}/anime.png`} 
              alt="" 
            />
            </picture>

            <h4 className="title">Nome: A.I.C.O Incarnation</h4>
            <img 
              className="arrow-right mobile-only" 
              src={`${process.env.PUBLIC_URL}/arrow-right.svg`} 
              alt="a arrow pointing to right"
            />

             <span className="anime-card__details desktop-only">
            </span>
          </div>
</li>
)

export default AnimeCard
