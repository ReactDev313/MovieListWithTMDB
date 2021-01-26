// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Application Settings
import App from './components/App/App';
import store from './store';
import './index.scss';


// Application Helmet Template
let Application = (

    <Provider store = { store }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

)

// Rendering Part
ReactDOM.render(
    Application,
    document.getElementById('root')
)