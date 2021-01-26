const initialState = {
    movies : [],
    pages : 1
}

export default function ( state = initialState, action ) {
    switch ( action.type ) {

        // Set Movies Here
        case "SET_POPULAR_PAGE_MOVIES" : {

            let updatedState = { ...state };

            updatedState.movies = [ ...updatedState.movies, ...action.payload ]

            return {
                ...updatedState
            }
            
        }

        // Set Current Pages
        case "SET_POPULAR_PAGE_PAGES" : {
            return {
                ...state,
                pages : action.payload
            }
        }

        // Action By Default
        default : { return state }
    }
}