import React from 'react';

import './List.scss';

export default function List(props){
    const {arr} = props;

    const list = arr.map( ar => <li className='list__item'>{ar}</li>);

    return(
        <ul className='list'>
            {list}
        </ul>
    )
}

