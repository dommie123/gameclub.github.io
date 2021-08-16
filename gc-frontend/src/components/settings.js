import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function ProfileSettings(props) {
    const user = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    return (
        <div className="settings" id="profile-settings">
            
        </div>
    )
}