import {GET_DANK_MEME, GET_ALL_MEMES, NEW_DANK_MEME} from './types';
import {GameClubDB} from './axios-endpoints';

export const getAllMemes = () => {
    return function(dispatch) {
        let dankMemes = GameClubDB.get("").then(data => dispatch({
            type: GET_ALL_MEMES,
            payload: data
        }))
        console.log(dankMemes);
        return dankMemes.data;
    }
}

export const getDankMeme = () => {
    return function(dispatch) {
        let dankMeme = GameClubDB.get("").then(data => dispatch({
            type: GET_DANK_MEME,
            payload: data
        }))
        console.log(dankMeme);
        return dankMeme.data;
    }
}

export const getAllMemes = (meme) => {
    return function(dispatch) {
        let newMeme = GameClubDB.post("", {
            title: meme.title,
            byteStream: meme.bytes
        }).then(data => dispatch({
            type: NEW_DANK_MEME,
            payload: data
        }))
        console.log(newMeme);
        return newMeme.data;
    }
}