import React, { useEffect } from 'react'
import { animesFetchData } from 'store/actions/fetchAnimes';
import { connect } from 'react-redux';
//import AnimeCard from 'components/AnimeCard'
import './styles.scss'
import AnimeCard from 'components/AnimeCard';
import { Link } from 'react-router-dom';

const mapStateToProps = (state: any) => {
  return {
      animes: state.animes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      fetchData: (url: string) => dispatch(animesFetchData(url))
  };
};

const SectionAnimes = (props: any) => {

useEffect(()=> {
  props.fetchData('?page[limit]=8&page[offset]=0');

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
 
  return (
    <section className="section-animes" id="top-animes">
      <header>
        <img 
          src={`${process.env.PUBLIC_URL}/infinite.svg`} 
          alt="Um símbolo de infinito" 
        /> 
        <h2>Veja Animes</h2> 
        
      </header>
      <ul>
      {props.animes && props.animes.map(({id, attributes }: any) => {
        return (
          <Link key={id} to={{ pathname: '/anime', state: {
            animeDetails: { 
            title: attributes.abbreviatedTitles[0] || attributes.canonicalTitle,
            posterImage: attributes.posterImage,
            synopsis: attributes.synopsis}
          }}
          }>
              <AnimeCard 
                title={attributes.abbreviatedTitles[0] || attributes.canonicalTitle} 
                coverImage={attributes.coverImage ? attributes.coverImage : ''} 
                episodeCount={attributes.episodeCount} 
                averageRating={attributes.averageRating} 
              />
          </Link>
            )
      }
      )}
      </ul>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionAnimes);
