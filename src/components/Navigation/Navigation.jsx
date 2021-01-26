// React
import React, { Component } from 'react';
import './navigation-module.scss';

// Router
import { NavLink } from 'react-router-dom';

// Assets
import { BsSearch } from 'react-icons/bs';


class Navigation extends Component {

    render () {
        return (
            <div id="app-navigation">

                <div className="app-navigation_logo">
                    <h1 className="app-navigation_logo-caption"> Lookie </h1>
                </div>

                <div className="app-navigation_items">
                    <NavLink to = '/' className='app-navigation_items-item'>Home</NavLink>
                    <NavLink to = '/popular' className='app-navigation_items-item'>Popular</NavLink>
                    <NavLink to = '/categories' className='app-navigation_items-item'>Categories</NavLink>
                    <NavLink to = '/' className='app-navigation_items-item'>Movies</NavLink>
                </div>

                <div className="app-navigation_actions">
                </div>
            </div>
        );
    }

}

export default Navigation;