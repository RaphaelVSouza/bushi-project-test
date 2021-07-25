import SectionCarousel from 'components/SectionCarousel'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SectionAnimes from 'components/SectionAnimes'
import SectionWhatDoHere from 'components/SectionWhatDoHere'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionCarousel/>
      <SectionWhatDoHere/>
      <SectionAnimes />
      <Footer />
    </div>
  );
}

export default App;
