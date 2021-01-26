// API
import GENRES from '../../../constants/API/genres';

const initialState = {
    genres : [...GENRES]
}

export default function ( state = initialState, action ) {
    switch ( action.type ) {

        // Actions Here

        default : { 
            return state;
        }
    }
}