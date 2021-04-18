import {GET_ALL_GUIDES, GET_GUIDES_BY_AUTHOR, GET_GUIDE_BY_ID, GET_GUIDE_BY_TITLE, NEW_GUIDE} from '../actions/types';

const initialState = {
    guides: [],
    guide: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_ALL_GUIDES: 
        return {
            ...state,
            guides: action.payload
        }
        case GET_GUIDE_BY_TITLE: 
        return {
            ...state,
            guide: action.payload
        }
        case GET_GUIDE_BY_ID: 
        return {
            ...state,
            guide: action.payload
        }
        case GET_GUIDES_BY_AUTHOR: 
        return {
            ...state,
            guides: action.payload
        }
        case NEW_GUIDE: 
        return {
            ...state,
            guide: action.payload
        }
    }
}