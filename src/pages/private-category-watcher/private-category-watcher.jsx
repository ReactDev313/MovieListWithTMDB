// React Here
import React, { Component } from 'react';
import './private-category-watcher-page.scss';

// And Import Redux connect
import { connect } from 'react-redux';

// API
import API from '../../constants/API/api';
import GENRES from '../../constants/API/genres';

// Utils
import _ from 'lodash';

// Containers
import MovieCard from '../../containers/MovieCard/MovieCard';

class CategoryWatcher extends Component {

    

    componentWillMount () {

        // Just for make easier
        const { genre } = this.props.match.params;

        // Working with API
        API.genres.getMovies({ 
            id : GENRES[_.findIndex( GENRES, { name : _.capitalize(genre) } ) ].id
        }, (data) => {

            // Dispatching Action With Array of Movies
            this.props.setMoviesByCategory(JSON.parse(data).results)

            // If Something Went Wrong !
        }, (error) => { console.error( error ) })

    }

    render () {

        // Just for make easier
        const { genre } = this.props.match.params;

        return (
            <div id="category-watch-page">

                <div className="page_headline">

                    <h1 style = { { textTransform : 'capitalize' } } >
                        { this.props.match.params.genre } movies on Lookie.</h1>
                        
                    <p> {this.props.captions[ _.findIndex(this.props.captions, { 'genre' : genre.toLowerCase() }) ].caption} </p>

                </div> <br/><br/>

                {
                    this.props.movies.map( ( CHUNK, index ) => (
                        <div className="row row-with-columns" style = {{ height : 'calc(auto + 20px' }} key = { index }>
                            { CHUNK.map( ( movie, index ) => (

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
                        </div>
                    ))
                }



            </div>
        );
    }

}

const mapStateToProps = state => {

    return {
        captions : state.categoryWatcher.captions,
        movies : _.chunk( state.categoryWatcher.movies, 4 )
    }

}, mapDispatchToProps = dispatch => {

    return {
        setMoviesByCategory : ( moviesArray ) => {
            dispatch ({
                type : 'SET_MOVIES_BY_CATEGORY',
                payload : moviesArray
            })
        }
    }

}

export default connect( mapStateToProps, mapDispatchToProps ) (CategoryWatcher);