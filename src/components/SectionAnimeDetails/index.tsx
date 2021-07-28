import './styles.scss'

const SectionAnimeDetails = () => (
  <section className="section-anime-details">
    <div className="details">
      <img 
        src={`${process.env.PUBLIC_URL}/anime-poster.png`}
        alt=""
      />
      <div className="text">
        <h1>Nome do anime: Naruto</h1> 
        <h2>Sinopse:</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in, veniam ipsum exercitationem repellat temporibus magnam quaerat id, dignissimos consectetur impedit ut nobis molestias repellendus blanditiis quasi! Ex, similique corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore, odio dolorum consectetur, quasi aliquid quo sed consequuntur distinctio quam corrupti non neque laboriosam? Provident quo sed optio esse error.</p>
      </div>
    </div>

    <div className="other-details">
      <p>Outras informações da API</p>
    </div>
  </section>
)

export default SectionAnimeDetails
