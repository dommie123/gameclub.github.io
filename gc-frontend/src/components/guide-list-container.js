import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {getGuides} from '../actions/guide-actions';

export default function GuideListContainer() {
    const guides = useSelector(state => state.guides.guides);
    const user = useSelector(state => state.users.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuides());
    }, []);

    if (guides) {
        return (
            <div className="container">
                <ul>
                    {guides.data ? guides.data.map((guide) => 
                        <div className="container">
                            <h5>{guide.title}</h5>
                            <li key={guide.id}>{guide.title}{guide.description}</li>
                        </div>
                    ) : <p>No guides can be found!</p>}
                </ul>
                {(user) ? <Link to="/guides/add-guide">Add a meme</Link> : <></>}
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>No guides can be found!</p>
                {(user) ? <Link to="/guides/add-guide">Add a meme</Link> : <></>}
            </div>
        )
    }
  
}