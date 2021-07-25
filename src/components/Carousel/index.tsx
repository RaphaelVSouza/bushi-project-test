import './styles.scss'

const Carousel = () => (
  <div className="carousel" style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/carousel.png)` }}>
  <div className="layer">
    <div className="content-box">
        <img className="content-box__logo" src={`${process.env.PUBLIC_URL}/logo-banner.svg`} alt="bushi legacy" />

        <div className="text-box">
        <h2 className="content">monitore os seus animes preferidos, e não perca mais nenhum episódio</h2>
        <a href="#e" ><img className="arrow" src={`${process.env.PUBLIC_URL}/arrow-down.svg`} alt="arrow pointing to down" /></a> 
        </div>
    </div>
    </div>
  </div>
)

export default Carousel
