import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import GuideList from './guide-list';
import {getGuides} from '../actions/guide-actions';

export default function GuideListContainer() {
    const [guides, setGuides] = useState(useSelector(state => state.guides.guides));
    //const [guideList, setGuideList] = useState(<GuideList />);
    const [user, setUser] = useState(useSelector(state => state.currentUser));

    const dispatch = useDispatch();

    const getAllGuides = () => {
        setGuides(dispatch(getGuides()));
        console.log(guides);
    }

    // const renderList = () => {
    //     console.log(guides);
    //     setGuideList(<GuideList guideList={guides} />)
    // }

    useEffect(() => {
        getAllGuides();
    }, [guides]);

    if (guides) {
        return (
            <div className="container">
                <ul>
                    {guides.data ? guides.data.map((guide) => 
                        <li key={guide.id}>{guide.title}<br></br>{guide.description}</li>) : <p>No guides can be found!</p>}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>No guides can be found!</p>
            </div>
        )
    }
  
}