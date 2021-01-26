// React
import React from 'react';
import './category-card-module.scss';

// Utils
import styled from 'styled-components'

// Router
import { NavLink } from 'react-router-dom';

// Styled
const Category = styled.div`

    width: 250px;
    height: 400px;
    margin: 20px;

    background: #444;

    display: flex;
    justify-content: center;
    align-items: center;

    background-position: center;
    background-size: 300%;

    box-shadow : 0 10px 10px rgba(0,0,0,.2);
    border: 5px solid #fff;

    position: relative;

    transition: background-size .5s, transform .5s, box-shadow .3s;
    cursor : pointer;

    .category-card_title {
        color: #fff;
        font-weight: 100;
        text-transform : uppercase;
        text-align: center;
    }

    &:hover {
        background-size: 270%;
        transform:scale(.97);
        box-shadow : 0 5px 10px rgba(0,0,0,.2);
    }
`;

const CategoryCard = ( props ) => {

    return (
        <NavLink style = { { textDecoration : 'none' } } to = {`/category/${ props.title.toLowerCase() }`}>
            <Category 
                className='category-card' 
                background = { props.background }>

                <h1 className='category-card_title'>{ props.title }</h1>

            </Category>
        </NavLink>
    );
}

export default CategoryCard;