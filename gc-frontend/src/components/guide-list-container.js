import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

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
        setGuideList(<GuideList guideList={guides} />)
    }

    useEffect(() => {
        getAllGuides();
        renderList();
    }, [guides]);

    return (
        <div className="container">
            {guideList}
        </div>
    )
}