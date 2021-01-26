const initialState = {

    // Top Movies
    topMovies : [],

    // Movies By Genre
    topHorrorMovies : [],
    topActionMovies : [],
    topAdventureMovies: [],
    topAnimationMovies : [],
    topComedyMovies : [],
    topCrimeMovies : [],
    topDocumentaryMovies : [],
    topDramaMovies : [],
    topFamilyMovies : [],
    topFantasyMovies : [],
    topHistoryMovies : [],
    topMusicMovies : [],
    topMysteryMovies : [],
    topRomanceMovies : [],
    "topScience FictionMovies" : [],
    "topTV MovieMovies" : [],
    topThrillerMovies : [],
    topWarMovies : [],
    topWesternMovies : []
}

export default function ( state = initialState, action ) {
    switch ( action.type ) {

        // Set Popular Movies
        case 'SET_POPULAR_MOVIES' : {
            let updatedState = { ...state };
            updatedState[action.payload.genre] = action.payload.movies;

            return {
                ...updatedState
            }
        }


        // Default Action
        default : {
            return state
        }
    }
}