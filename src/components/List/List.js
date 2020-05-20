import React from 'react';

import './List.scss';

export default function List(props){
    const {arr} = props;

    const list = arr.map( (ar,i) => <li className='list__item' key={i}>{ar}</li>);

    return(
        <ul className='list'>
            {list}
        </ul>
    )
}

