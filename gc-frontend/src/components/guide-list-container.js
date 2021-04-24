import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import GuideList from './guide-list';
import {getGuides} from '../actions/guide-actions';

export default function GuideListContainer() {
    const [guides, setGuides] = useState([]);
    const [guideList, setGuideList] = useState(<GuideList />);
    const [user, setUser] = useState(useSelector(state => state.currentUser));

    const dispatch = useDispatch();

    const getAllGuides = () => {
        setGuides(dispatch(getGuides()));
        console.log(guides);
    }

    const renderList = () => {
        console.log(guides);
        setGuideList(<GuideList guideList={guides} />)
    }

    useEffect(() => {
        getAllGuides();
        renderList();
    }, [guides]);

    return (
        <div className="container">
            <ul>
                {guideList}
            </ul>
        </div>
    )
}