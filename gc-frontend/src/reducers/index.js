import {combineReducers} from 'redux';
import guideReducer from './guide-reducer';
import memeReducer from './meme-reducer';
import uiReducer from './ui-reducer';
import userReducer from './user-reducer';


export default combineReducers({
    users: userReducer,
    dankMemes: memeReducer,
    guides: guideReducer,
    ui: uiReducer
})