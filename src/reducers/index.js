import { combineReducers } from 'redux';

const songsReducer = (state = null, action) => {
    console.log(action)
    if (action.type === 'ADD_SONG') {
        return [...state,action.payload
       
        ]

    }
    return [
        { title: 'No Scrubs', duration: '4.05' },
        { title: 'Macarena', duration: '2.30' },
        { title: 'All Start', duration: '3.15' },
        { title: 'I want it that way', duration: '1.45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})