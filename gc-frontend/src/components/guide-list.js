import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function GuideList(props) {
    const guideList = props.guideList;
    const jsxGuides = [];
    if (guideList) {
        if (guideList.data) {
            console.log("Guide List", guideList);
            console.log("JSX Guide List", jsxGuides);
            jsxGuides = guideList.data.map((item) => 
                <li key={item.id}><h4>({item.id}) {item.title}</h4></li>
            )
        }
    }
    console.log(jsxGuides);

    useEffect(() => {
        console.log(guideList);
    }, [guideList]);
    
    return (
        <ul>
            {jsxGuides}
        </ul>
    )
}