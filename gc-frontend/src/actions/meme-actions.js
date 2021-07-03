import {GET_DANK_MEME_BY_TITLE, GET_DANK_MEME_BY_ID, GET_MEMEZ_BY_AUTHOR, YEET_MEME, GET_ALL_MEMEZ, NEW_DANK_MEME} from './types';
import {GameClubDB} from './axios-endpoints';

export const getAllMemes = () => {
    return function(dispatch) {
        let dankMemes = GameClubDB.get("/meme/all").then(data => dispatch({
            type: GET_ALL_MEMEZ,
            payload: data
        }))
        return dankMemes.data;
    }
}

export const getMemesByAuthor = (authId) => {
    return function(dispatch) {
        let dankMemes = GameClubDB.get(`/meme/author/${authId}`).then(data => dispatch({
            type: GET_MEMEZ_BY_AUTHOR,
            payload: data
        }))
        return dankMemes.data;
    }
}

export const getDankMeme = (title) => {
    return function(dispatch) {
        let dankMeme = GameClubDB.get(`/meme/title/${title}`).then(data => dispatch({
            type: GET_DANK_MEME_BY_TITLE,
            payload: data
        }))
        return dankMeme.data;
    }
}

export const getDankMemeById = (id) => {
    return function(dispatch) {
        let dankMeme = GameClubDB.get(`/meme/id/${id}`).then(data => dispatch({
            type: GET_DANK_MEME_BY_ID,
            payload: data
        }))
        return dankMeme.data;
    }
}

export const newDankMeme = (meme) => {
    return function(dispatch) {
        let newMeme = GameClubDB.post("/meme/", {
            title: meme.title,
            author: meme.author,
            byteStream: meme.bytes
        }).then(data => dispatch({
            type: NEW_DANK_MEME,
            payload: data
        }))
        //console.log(newMeme);
        return newMeme.data;
    }
}

export const yeetMeme = (id) => {
    return function(dispatch) {
        return GameClubDB.delete(`/meme/id/${id}`).then(dispatch({
            type: YEET_MEME
        }))
    }
}