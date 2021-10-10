import {GET_ALL_GUIDES, GET_GUIDE_BY_ID, GET_GUIDE_BY_TITLE, GET_GUIDES_BY_AUTHOR, NEW_GUIDE} from './types';
import {GameClubDB} from './axios-endpoints';
import { showError } from '../utils/error-dialog';

export const getGuides = () => {
    return function(dispatch) {
        let guides = GameClubDB.get("/guide/all").then(data => dispatch({
            type: GET_ALL_GUIDES,
            payload: data
        })).catch(err => {showError(err.message)});

        return guides.data;
    }
}

export const getGuideById = (id) => {
    return function(dispatch) {
        let guides = GameClubDB.get(`/guide/id/${id}`).then(data => dispatch({
            type: GET_GUIDE_BY_ID,
            payload: data
        })).catch(err => {showError(err.message)});

        return guides.data;
    }
}

export const getGuidesByAuthor = (authId) => {
    return function(dispatch) {
        let guides = GameClubDB.get(`/guide/author/${authId}`).then(data => dispatch({
            type: GET_GUIDES_BY_AUTHOR,
            payload: data
        })).catch(err => {showError(err.message)});

        return guides.data;
    }
}

export const getGuide = (name) => {
    return function(dispatch) {
        let guide = GameClubDB.get(`/guide/title/${name}`).then(data => dispatch({
            type: GET_GUIDE_BY_TITLE,
            payload: data
        })).catch(err => {showError(err.message)});
        
        return guide.data;
    }
}

export const newGuide = (guide) => {
    return function(dispatch) {
        let g = GameClubDB.post("/guide/", {
            title: guide.title,
            description: guide.description,
            author: guide.author
        }).then(data => dispatch({
            type: NEW_GUIDE, 
            payload: data
        })).catch(err => {showError(err.message)});

        return g.data;
    }
}