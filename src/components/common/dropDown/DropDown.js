import React from 'react';

import { Main, Body, CurrentRank } from './dropDownStyle';

let items = [1, 2, 3, 4, 5];

const DropDown = (props) => {

    let buttons = items.map((item, index) => {
        return (
            <div
                key={index}
                onClick={(e) => {
                    props.setRank(props.id, item);
                    e.stopPropagation();
                }}>
                {item}
            </div>
        )
    })

    return (
        <Main>
            <CurrentRank onClick={(e) => e.stopPropagation()}>{props.rank}</CurrentRank>
            <Body>
                {buttons}
            </Body>
        </Main>
    )
}

export default DropDown;
