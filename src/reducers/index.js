// REDUCERS INDEX
import {combineReducers} from 'redux';

const songsReducer = () => {
return [
    
    {title: 'Straight outta of Compton', duration:  '3:15'},
    {title: 'F**k tha Police', duration:  '4:05'},
    {title: 'Gangsta Gangta', duration:  '2:59'},
    {title: 'Lethal Weapon', duration:  '3:00'},
    {title: 'Quiet on tha set', duration:  '2:99'},

   ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
        return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
