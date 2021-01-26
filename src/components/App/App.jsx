// React
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

// Pages
import Home from '../../pages/Home/Home';
import Popular from '../../pages/Popular/Popular';
import Categories from '../../pages/Categories/Categories'

// Private Pages
import CategoryWatcher from '../../pages/private-category-watcher/private-category-watcher';
import MovieWatcher from '../../pages/private-movie-watcher/private-movie-watcher';


class Application extends Component {

    render () {

        return (
            <>
                { ( !this.props.location.pathname.includes('/movie') ) && <Navigation/> }

                <div id="page">

                            <Switch>

                                <Route exact path='/' component = { Home } />
                                <Route exact path='/popular' component = { Popular } />
                                <Route exact path='/categories' component = { Categories } />


                                <Route exact path='/category/:genre' component = { CategoryWatcher } />
                                <Route exact path='/movie/:id' component = { MovieWatcher } />

                            </Switch>

                </div>

                { ( !this.props.location.pathname.includes('/movie') ) && <Footer/> }
            </>
        );
    }

} 

// Redux
const mapStateToProps = ( state ) => {
    return {
        settings : state.settings
    }
}, mapDispatchToProps = ( dispatch ) => {
    return {

    }
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Application));