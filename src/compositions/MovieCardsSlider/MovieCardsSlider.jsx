// React
import React, { useState } from 'react';

// Containers
import MovieCard from '../../containers/MovieCard/MovieCard';

// API
import GENRES from '../../constants/API/genres';

// Utils
import ItemsCarousel from 'react-items-carousel';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import _ from 'lodash';
 

const MovieCardsSlider = ( props ) => {

    const [activeItemIndex, setActiveItemIndex] = useState(0),
    chevronWidth = 40;


    // Main Slider Here
    return (

        <div style={{ width: '100%', overflow: 'hidden', padding: `0 ${chevronWidth}px` }}>

          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={<FiChevronLeft/>}
            rightChevron={<FiChevronRight/>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            { props.movies.map( ( movie, index ) => (

      
              <MovieCard 
                key = { index } 
                rate = { movie.vote_average }
                movieName = { movie.original_title }
                isAdult = { movie.adult }
                id = { movie.id }
                movieSubInfo = { `(${movie.release_date.slice(0, 4)}) · ${
                  movie.genre_ids.slice(0, 3).map( genre => {
                    return " " + GENRES[ _.findIndex(GENRES, { id : genre }) ].name
                  } )
                }`  }
                cover = { `https://image.tmdb.org/t/p/w500${movie.poster_path}` } />

            )) }

          </ItemsCarousel>

        </div>
      );

}

export default MovieCardsSlider;

// <MovieCard movieName = 'Prey' movieSubInfo = 'SOmething' isAdult = { true } rate = { 1.5 } cover = {} />