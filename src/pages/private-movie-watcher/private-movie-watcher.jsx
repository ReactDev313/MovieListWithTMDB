// React
import React, { Component } from 'react';
import './private-movie-watcher-page.scss';

// Redux Here
import { connect } from 'react-redux';

// API
import API from '../../constants/API/api';

// Utils
import { FaChevronLeft } from 'react-icons/fa';

class MovieWatcher extends Component {

    componentWillMount () {

        // Get Id from URL Params
        const { id } = this.props.match.params;

        // Get Current Movie Info
        API.movies.getById({ id }, ( data ) => {

            this.props.setMovieById( JSON.parse( data ) )

        }, ( error ) => { console.error( error ) })

        // Get Related Movies
        API.movies.getSimilarMovies( { id }, ( data ) => {

            this.props.setRelatedMovies(JSON.parse(data).results.filter( movie => movie.original_title.length < 20 ))

        }, (error) => { console.error(error) })
    }

    render () {

        const { id } = this.props.match.params;

        return (

            <div id="movie-watch-page">

                <button className='back-btn' onClick={() => {
                    window.history.back();
                }}><FaChevronLeft/></button>

                <div className="movie-watch-page_backdrop" 
                     style = {{ background:`linear-gradient(rgba(0,0,0,.5), transparent, #000), url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`,
                            backgroundSize: 'cover', backgroundPosition:'center' }}>
                <div className="blur"></div>
                </div>

                <div className="movie-watch-page_info">

                    <div className="poster" style = {{ 
                        backgroundImage : `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`,
                        backgroundSize: 'cover', backgroundPosition : 'center' }}>

                    </div>


                    <div className="wrapper">
                        <h1 className='movie-watch-page_info-title'>{this.props.movie.original_title}</h1>
                        <p className='movie-watch-page_info-tagline'>{ this.props.movie.tagline }</p><br/>
                        <p className='movie-watch-page_info-description'>{this.props.movie.overview}</p>
                    </div>

                </div>

            </div>

        );
    }

}

// Redux Here
const mapStateToProps = state => {

    return {
        movie : state.movieWatcher.movie,
        relatedMovies : state.movieWatcher.relatedMovies
    }

}, mapDispatchToProps = dispatch => {

    return {

        setMovieById : ( movie ) => {
            dispatch ({
                type : 'SET_MOVIE_BY_ID',
                payload : movie
            })
        },

        setRelatedMovies : ( moviesArray ) => {
            dispatch({
                type : 'SET_RELATED_MOVIES_BY_ID',
                payload : moviesArray
            })
        }

    }

}

export default connect( mapStateToProps, mapDispatchToProps )( MovieWatcher )