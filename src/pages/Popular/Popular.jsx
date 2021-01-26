// React
import React, { Component } from 'react';
import  './popular-page.scss';

// Utils
import _ from 'lodash'

// Compositions
import MovieCardsSlider from '../../compositions/MovieCardsSlider/MovieCardsSlider';

// API
import API from '../../constants/API/api';

// Redux
import { connect } from 'react-redux';


class Popular extends Component {

    // Fetch Action for Fetching Data From API
    Fetch ( start, end ) {

        for ( let i = start; i < this.props.pages + end; i++ ) {
            API.movies.getPopular( { page : i }, data => {

                this.props.setMovies( JSON.parse( data ).results );
                
            }, error => { console.error ( error ) } )
        }

    }

    // Load More Action
    loadMore () {

        // Setting Local State
        this.props.setPages( this.props.pages + 1 )

        // Setting Global Movies State
        this.Fetch( this.props.pages + 1, this.props.pages + 2)

    }

    // Clear Cache
    componentWillMount () {
        this.props.setMovies([]);
        this.props.setPages(1);
    }


    // First Call of Fetch Action
    componentDidMount () {
        this.Fetch(0, this.props.pages)
    }

    render () {

        return (
            <div id="popular-page">

                <div className="page_headline">
                    <h1>Most popular movies on Lookie.</h1>
                    <p>The people have spoken ! See the most-watched movies now on Lookie !</p>
                </div> <br/><br/>

                {
                    this.props.movies.map( ( moviesArray, index ) => (
                        <div className="row" key = { index }>
                            <MovieCardsSlider 
                                movies = { moviesArray } />
                        </div>
                    ))
                }

                { ( this.props.pages < 6 ) &&
                    <div className="row">
                        <button onClick = { this.loadMore.bind(this) } className='load-more btn'>Load More</button>
                    </div>
                }

            </div>
        );
    }

}

// Redux
const mapStateToProps = state => {

    return {

        movies : _.chunk( 
            state.popular.movies.filter( movie => movie.original_title.length < 25 ), 4 ),
        
        pages : state.popular.pages

    }

}, mapDispatchToProps = dispatch => {

    return {

        setMovies : ( moviesArray ) => {
            dispatch ( {
                type : 'SET_POPULAR_PAGE_MOVIES',
                payload : moviesArray
            } )
        },

        setPages : ( page ) => {
            dispatch({
                type : 'SET_POPULAR_PAGE_PAGES',
                payload : page
            })
        }
    }

}

export default connect( mapStateToProps, mapDispatchToProps )(Popular);