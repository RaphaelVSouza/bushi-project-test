import React, { useEffect } from 'react'
import { itemsFetchData } from 'actions/items';
import { connect } from 'react-redux';
//import AnimeCard from 'components/AnimeCard'
import './styles.scss'
import AnimeCard from 'components/AnimeCard';
import { Link } from 'react-router-dom';

const mapStateToProps = (state: any) => {
  return {
      items: state.items,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      fetchData: () => dispatch(itemsFetchData('?page[limit]=8&page[offset]=0'))
  };
};

const SectionAnimes = (props: any) => {
 
useEffect(()=> {
  props.fetchData('?page[limit]=8&page[offset]=0');

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
 
  return (
    <section className="section-animes">
      <header>
        <img 
          src={`${process.env.PUBLIC_URL}/infinite.svg`} 
          alt="Um símbolo de infinito" 
        /> 
        <h2>Veja Animes</h2> 
        
      </header>
      <ul>
      {props.items && props.items.map(({ attributes }: any, index: number) => {

        console.log(props.items[index])
        return (
          <Link to={{ pathname: '/anime', state: {
            animeDetails: { 
            title: attributes.abbreviatedTitles[0] || attributes.canonicalTitle,
            posterImage: attributes.posterImage,
            synopsis: attributes.synopsis}
          }}
          }>
              <AnimeCard 
                key={index} 
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
