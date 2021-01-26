const initialState = {

    movie : {},

    relatedMovies : [],

}

export default function ( state = initialState, action ) {

    switch ( action.type ) {

        // Set Current Movie
        case "SET_MOVIE_BY_ID" : {
            return {
                ...state,
                movie : action.payload
            }
        }

        // Set Related Movies
        case "SET_RELATED_MOVIES_BY_ID" : {
            return {
                ...state,
                relatedMovies : action.payload
            }
        }

        default : {
            return state;
        }

    }

}