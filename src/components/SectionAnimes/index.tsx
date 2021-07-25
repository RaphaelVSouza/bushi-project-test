import AnimeCard from 'components/AnimeCard'
import './styles.scss'

const SectionAnimes = () => (
  <section className="section-animes">
    <header className="section-animes__header">
      <img 
        className="icon"
        src={`${process.env.PUBLIC_URL}/infinite.svg`} 
        alt="a infinite symbol" 
      /> 
      <h2 className="title">Veja Animes</h2> 
    </header>
    <ul className="animes-list">
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
    </ul>
  </section>
)

export default SectionAnimes
