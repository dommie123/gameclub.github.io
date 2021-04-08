import {GET_DANK_MEME, NEW_DANK_MEME, GET_ALL_MEMES} from '../actions/types';

const initialState = {
    memes: [],
    meme: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_DANK_MEME: 
        return {
            ...state,
            meme: action.payload 
        }
        case NEW_DANK_MEME:
        return {
            ...state,
            meme: action.payload
        }
        case GET_ALL_MEMES:
        return {
            ...state,
            memes: action.payload
        }
    }
}