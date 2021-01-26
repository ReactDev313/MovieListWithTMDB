// React
import React, { Component } from 'react';
import './categories-page.scss';

// Redux
import { connect } from 'react-redux';

// Utils
import _ from 'lodash';

// API
import API from '../../constants/API/api';
import GENRES from '../../constants/API/genres';

// Containers
import CategoryCard from '../../containers/CategoryCard/CategoryCard'

class Categories extends Component {

    randomColor () {

        let gradients = [
            `background:linear-gradient(90deg, #cb2d3e 0%,#ef473a 100% );`,
            `background:linear-gradient(90deg, #42275a 0%,#734b6d 100% );`,
            `background:linear-gradient(90deg, #834d9b 0%,#d04ed6 100% );`,
            `background:linear-gradient(90deg, #fd746c 0%,#ff9068 100% );`,
            `background:linear-gradient(90deg, #6a3093 0%,#a044ff 100% );`
        ];

        return gradients[Math.floor( Math.random() * gradients.length )];
    }

    render () {
        return (
            <div id="categories-page">

                <div className="page_headline">
                    <h1>Choose your lovely category.</h1>
                    <p>You can find any kind of movie on Lookie. There are many genres of movies on Lookie. </p>
                </div> <br/><br/>

                {
                    this.props.genres.map( ( CHUNK, index ) => (

                        <div key = { index } className="row row-with-columns">
                            { CHUNK.map( (GENRE, index_card) => {

                                return (
                                    <CategoryCard key = { index_card } title = { GENRE.name } background = { this.randomColor() } />
                                )
                                
                        } ) } 
                        </div>

                    ))
                }
                
            </div>
        );
    }

}

// Redux
const mapStateToProps = state => {
    return {
        genres : _.chunk( state.categories.genres, 4 )
    }
}, mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Categories );