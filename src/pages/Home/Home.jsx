// React
import React, { Component } from 'react';
import './home-page.scss';

// Redux
import { connect } from 'react-redux';

// API
import API from '../../constants/API/api';
import GENRES from '../../constants/API/genres';

// Compositions
import MovieCardsSlider from '../../compositions/MovieCardsSlider/MovieCardsSlider';


class Home extends Component {

    state = {
        isReady : false,
        limit : 3,
    }

    // Fetch Method
    Fetch ( callback ) {

        // By Genre
        for ( let GENRE of GENRES ) {

            API.genres.getMovies({ id : GENRE.id }, ( data ) => {

                let movies = JSON.parse(data).results.filter( movie => movie.original_title.length < 20 );
                this.props.setTopMovies( `top${GENRE.name}Movies`, movies );
    
            }, ( error ) => { console.error(error) })

            if ( GENRES.indexOf(GENRE) === GENRES.length - 1 ) {
                callback();
            }

        }
    }

    // Load More Action

    loadMore () {
        this.setState({
            ...this.state,
            limit : this.state.limit + 3
        })
    }

    // Using Lifecycle Hook for Update State
    componentDidMount () {

        this.Fetch(() => {
            this.setState({
                isReady : true
            })
        })

    }

    render () {

        return (

            <div id='home-page'>

                <div className="page_headline">
                    <h1>The largest free library of <br/> movies on earth </h1>
                </div>

                {
                    ( this.state.isReady ) && GENRES.slice(0, this.state.limit).map( ( GENRE, index ) => (

                        <div className="row" key = { index }>
                            <h1 className='row-headline'>{ GENRE.name }</h1>
                            <MovieCardsSlider movies = {this.props.state[ `top${GENRE.name}Movies`]} />
                        </div>  

                    ))
                }

                <div className="row">
                    <button onClick = { this.loadMore.bind(this) } className='load-more btn'>Load More</button>
                </div>

            </div>
        );
    }

}

// Redux Here
const mapStateToProps = ( state ) => {
    return {
        state : state.home
    }
}, mapDispatchToProps = ( dispatch ) => {
    return {

        // Set Popular Movies by Genre
        setTopMovies : ( genre, moviesArray ) => {
            dispatch ({

                type : 'SET_POPULAR_MOVIES',

                payload : {
                    genre,
                    movies : moviesArray
                }
            })
        }

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);

//J