import './styles.scss'

const SectionCarousel = () => (
  <section className="carousel">

    <picture>
      <source 
        media="(max-width: 1440px)" 
        srcSet={`${process.env.PUBLIC_URL}/carousel--mb.png`} 
      />
      <img 
        className="bg"
        src={`${process.env.PUBLIC_URL}/carousel.png`} 
        alt="Lorem Ipsum" 
      />
    </picture>

    <div className="content">
      <img 
        className="logo" 
        src={`${process.env.PUBLIC_URL}/logo-banner.svg`} 
        alt="Texto escrito Bushi Legacy" 
      />
      <h1 className="text">Monitore os seus animes preferidos, e não perca mais nenhum episódio</h1>
    </div>

    <a 
      href="#what-do-here"
      className="anchor"
      aria-label="Uma seta apontando para baixo, ao ser clicada leva a seção de animes mais vistos"
      style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/arrow-down.svg)`}}
    > </a>
     
  </section>
  
)

export default SectionCarousel
