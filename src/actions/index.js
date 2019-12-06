// Action creator
export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED', // type is required in action creator
        payload: song
    };
};

export const addSong = song => {
    return {
        type: 'ADD_SONG',
        payload: song
    };
}