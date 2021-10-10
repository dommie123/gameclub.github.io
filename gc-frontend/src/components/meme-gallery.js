import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { /*Redirect,*/ Link } from 'react-router-dom';
import {getAllMemes} from '../actions/meme-actions';

export default function MemeGallery() {
    const memes = useSelector(state => state.dankMemes.memes);
    const user = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMemes());
        //console.log(memes);
    }, [memes, dispatch]);

    if (memes && memes.data) {
        return (
            <div className="container-lg" id="meme-container">
                <ul>
                    {memes.data.map((meme) => 
                    <li key={meme.id}>{meme.title} {meme.byteStream}</li>)}
                    {(user) ? <Link to="/memes/add-meme" className="add-button" style={{position: "fixed", bottom: 50, right: 50}}>+</Link> : <></>}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="container-lg" id="meme-container">
                <b>Where'd all the memes go?!</b>
                {(user) ? <Link to="/memes/add-meme" className="add-button" style={{position: "fixed", bottom: 50, right: 50}}>+</Link> : <></>}
            </div>
        )
    }

}