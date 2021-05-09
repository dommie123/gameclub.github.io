import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMemes} from '../actions/axios-endpoints';

export default function MemeGallery() {
    
    const [memes, setMemes] = useState([]);
    const user = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMemes());
    }, []);

    if (memes) {
        return (
            <div className="container-lg" id="meme-container">
                {memes.map((meme) => 
                <li key={meme.id}>{meme.title} {meme.byteStream}</li>)}
            </div>
        )
    } else {
        return (
            <div className="container-lg" id="meme-container">
                <b>Where'd all the memes go?!</b>
            </div>
        )
    }

}