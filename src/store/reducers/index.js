import { combineReducers } from 'redux';

import settings from './settings';

// Pages
import home from './home';
import popular from './popular';
import categories from './categories';

// Private Pages
import categoryWatcher from './private-category-watcher';
import movieWatcher from './private-movie-watcher/';

export default combineReducers({

    // Main App Settings
    settings,

    // Home Page State
    home,

    // Popular Page State
    popular,

    // Categories Page State
    categories,


    ////// Private Pages States

    // Category Watcher Page State
    categoryWatcher,
    movieWatcher
    
});