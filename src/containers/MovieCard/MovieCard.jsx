// React
import React from 'react';
import './movie-card-module.scss';

// Router
import { NavLink } from 'react-router-dom';

// Assets
import { FaSearch } from 'react-icons/fa';

// Styled Component
import styled from 'styled-components';

const Movie = {

    card : styled.div`

        width : 270px;
        height : 400px;
        
        transition : all .2s;

        &:hover {
            transform : scale(.97);
        }


    `,

    poster : styled.div`

        width: 100%;
        height: 80%;
        background: url(${ props => props.cover });
        box-shadow : inset 0 10px 10px rgba(0,0,0,.3);
        background-size: cover;
        border-bottom : 1px solid rgba(255, 255, 255, .2);

        position: relative;
        overflow : hidden;
        cursor: pointer;

        border-radius : 10px;

        &:after {
            content: '${ props => props.rate }';
            width : 25px;
            height : 25px;
            background:linear-gradient(90deg, #396afc 0%,#2948ff 100% );
            border: 2px solid #fff;
            position: absolute;
            top : 10px;
            left : 10px;

            font-size : .9em;

            color : #fff;

            display: flex;
            justify-content : center;
            align-items : center;
            font-weight : 100;
            border-radius: 50%;
        }

        &:before {
            content: '18+';
            width : 35px;
            height : 35px;
            background:linear-gradient(90deg, #cb2d3e 0%,#ef473a 100% );
            border: 2px solid #fff;
            position: absolute;
            top : 10px;
            right : 10px;

            color : #fff;

            display: ${ props => props.adult ? 'flex' : 'none' };
            justify-content : center;
            align-items : center;
            font-weight : 100;
            border-radius: 50%;
        }
    
    `,

    poster_play : styled.div`
        
        width : 100%;
        height : 100%;

        background : rgba(0,0,0,.8);
        display: flex;
        justify-content : center;
        align-items : center;
        color: #fff;
        font-size : 3em;
        transition: all .3s;

        opacity : 0;

        transform: scale(1.5);
    
    `
}


const MovieCard = ( props ) => {
    return (
        <Movie.card>
            <NavLink to = {`/movie/${props.id}`}>
                <Movie.poster 
                    cover = { props.cover } 
                    rate = { props.rate } 
                    adult = { props.isAdult }
                    className = 'movie_poster' >

                        <Movie.poster_play className = 'poster_play'>
                            <FaSearch/>
                        </Movie.poster_play>

                    </Movie.poster>
            </NavLink>
            
            <div className="movie-card_text-content">
                <NavLink 
                    style = {{ textDecoration : 'none' }}
                    to = {`/movie/${props.id}`}>
                    <h1 className='movie-card_text-content_title' >{ props.movieName }</h1></NavLink>
                <p className="movie-card_text-content_sub">{ props.movieSubInfo }</p>
            </div>
        </Movie.card>
    );
}


export default MovieCard;