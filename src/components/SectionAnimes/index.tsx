import React, { useState, useEffect } from 'react'
import { itemsFetchData } from 'actions/items';
import { connect } from 'react-redux';
//import AnimeCard from 'components/AnimeCard'
import './styles.scss'
import AnimeCard from 'components/AnimeCard';

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

  console.log(props)
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

        console.log(attributes)
        return (
        <AnimeCard 
          key={index} 
          title={attributes.abbreviatedTitles[0] || attributes.canonicalTitle} 
          coverImage={attributes.coverImage ? attributes.coverImage : ''} 
          episodeCount={attributes.episodeCount} 
          averageRating={attributes.averageRating} 
          synopsis={attributes.synopsis} 
          posterImage={attributes.posterImage} 
        />)
      }
      )}
      </ul>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionAnimes);

// const [animes, setAnimes] = useState([]);
  // useEffect(() => {
  //     apiAnime
  //     .get('?page[limit]=8&page[offset]=0')
  //     .then(({ data: response }) => {
  //         // { abbreviatedTitles[0], coverImage.tiny, coverImage.large, synopsis, episodeCount, averageRating }
      
  //         setAnimes(response.data)
          
  //     })
  //     .catch(({ data: error }) => console.error(error))

  //     console.log(animes)
      
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
