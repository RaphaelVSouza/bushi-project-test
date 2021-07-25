import SectionCarousel from 'components/SectionCarousel'
import Header from 'components/Header'
import SectionAnimes from 'components/SectionAnimes'
import SectionWhatDoHere from 'components/SectionWhatDoHere'

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionCarousel/>
      <SectionWhatDoHere/>
      <SectionAnimes />
    </div>
  );
}

export default App;
