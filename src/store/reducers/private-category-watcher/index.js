const initialState = {

    // Page Captions by Genre
    captions : [

        { genre : 'action', caption : 'The fists are furious, the guns are blazing, and the drama is sizzling in these edge-of-your-seat hits.' },
        { genre : 'adventure', caption : 'Adventure Films are exciting stories, with new experiences or exotic locales' },
        { genre : 'animation', caption : 'Animated Films are ones in which individual drawings, paintings, or illustrations are photographed frame by frame' },
        { genre : 'comedy', caption : 'The silliest slapstick, the sharpest satire, and everything in between. Tubi is not legally responsible for any busted guts or stitches in your side.' },
        { genre : 'crime', caption : `An action-packed mix of scripted whodunits and shocking, real-life murder mysteries ripped from today's headlines.` },
        { genre : 'documentary', caption : 'Discover groundbreaking, bizarre and inspiring true-life stories.' },
        { genre : 'drama', caption : `These TV dramas are slow-burning, smart, and above all else, tailor-made for marathon-viewing.` },
        { genre : 'family', caption : 'Animated adventures and heartwarming classics that the whole family can enjoy.' },
        { genre : 'fantasy', caption : 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds' },
        { genre : 'history', caption : 'A historical film is a fiction film showing past events or set within a historical period.' },
        { genre : 'horror', caption : 'This collection of classic spine-tinglers, modern slashers, and timeless schlock will send shivers down your spine.' },
        { genre : 'music', caption : 'Just like seeing them live! But without the sweaty guy yelling the lyrics out next to you.' },
        { genre : 'mystery', caption : 'A mystery film is a genre of film that revolves around the solution of a problem or a crime.' },
        { genre : 'romance', caption : 'Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion.' },
        { genre : 'science fiction', caption : 'No need to travel to a galaxy, far, far away — all the space odysseys, fantastic voyages, and close encounters that you seek are right here.' },
        { genre : 'tv movie', caption : `All of the cutthroat competitions, uplifting true stories, and ticking time bomb mayhem that reality TV has to offer in one place.` },
        { genre : 'thriller', caption : 'These heart-pounding mystery and suspense films will have you on the edge of your sea' },
        { genre : 'war', caption : 'War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama.' },
        { genre : 'western', caption : 'Saddle up and explore the Wild West with these tales of outlaws, bandits, gunslingers and bounty hunters' },

    ],


    movies : []

}

export default function ( state = initialState, action ) {

    switch ( action.type ) {

        case "SET_MOVIES_BY_CATEGORY": {

            let updatedState = { ...state };

            updatedState.movies = [ ...action.payload ];

            return {
                ...updatedState
            }

        }

        default : {
            return state
        }
    }

}