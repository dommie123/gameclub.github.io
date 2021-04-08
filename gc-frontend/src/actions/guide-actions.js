import {GET_ALL_GUIDES, GET_GUIDE, NEW_GUIDE} from './types';
import {GameClubDB} from './axios-endpoints';

export const getGuides = () => {
    return function(dispatch) {
        let guides = GameClubDB.get("").then(data => dispatch({
            type: GET_ALL_GUIDES,
            payload: data
        })).catch(console.log("An error occurred! Panic!"));

        console.log(guides);
        return guides.data;
    }
}

export const getGuide = (name) => {
    return function(dispatch) {
        let guide = GameClubDB.get("").then(data => dispatch({
            type: GET_GUIDE,
            payload: data
        })).catch(console.log("Could not get the guide! Panic!"));
        
        console.log(guide);
        return guide.data;
    }
}

export const newGuide = (guide) => {
    let g = GameClubDB.post("", {
        id: guide.id,
        title: guide.title,
        description: guide.description
    }).then(data => dispatch({
        type: NEW_GUIDE, 
        payload: data
    })).catch(console.log("Error creating a new guide! Panic!"));

    console.log(g);
    return g.data;
}