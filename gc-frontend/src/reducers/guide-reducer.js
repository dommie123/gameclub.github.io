import {GET_ALL_GUIDES, GET_GUIDE, NEW_GUIDE} from '../actions/types';

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
        case GET_GUIDE: 
        return {
            ...state,
            guide: action.payload
        }
        case NEW_GUIDE: 
        return {
            ...state,
            guide: action.payload
        }
    }
}