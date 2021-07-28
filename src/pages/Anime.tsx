import Footer from "components/Footer"
import Header from "components/Header"
import SectionAnimeDetails from "components/SectionAnimeDetails"

function Anime({ location }: any) {
  const {title, synopsis, posterImage} = location.state.animeDetails;
  window.scrollTo(0, 0);
  
  return (
    <>
      <Header/>
      <SectionAnimeDetails title={title} synopsis={synopsis} posterImage={posterImage} />
      <Footer/>
    </>
  )
}

export default Anime