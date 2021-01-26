const initialState = {
    page : 'Home'
}

export default function ( state = initialState , action) {
    switch ( action.type ) {
        
        case 'SET' : {

        }

        default : {
            return state;
        }
    }
}