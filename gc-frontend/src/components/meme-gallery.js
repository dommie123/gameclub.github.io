import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMemes} from '../actions/meme-actions';

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
                <ul>
                    {memes.map((meme) => 
                    <li key={meme.id}>{meme.title} {meme.byteStream}</li>)}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="container-lg" id="meme-container">
                <b>Where'd all the memes go?!</b>
                {user ? <button>Add a meme</button> : <></>}
            </div>
        )
    }

}