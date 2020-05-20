import React from 'react';

import './SideBar.scss';

export default function SideBar(props){
    const {active,setActive} = props;

    return(
        <nav className='sidebar'>
            <ul className='side-nav'>
                <NavLink icon='home' name='Hotel' setActive={setActive} active={active} />
                <NavLink icon='aircraft-take-off' name='Flight' setActive={setActive} active={active} />
                <NavLink icon='key' name='Car rental' setActive={setActive} active={active} />
                <NavLink icon='map' name='Tours' setActive={setActive} active={active} />
            </ul>
        </nav>
    )
}

function NavLink(props){
    const { icon,name,setActive,active } = props;
    
    return(
        <li className={'side-nav__item' + (name===active ? ' side-nav__item--active' : '')}  
            onClick={() => setActive(name)}>
            <a href='#' onClick={e => e.preventDefault()} className='side-nav__link' >
                <svg className='side-nav__icon'>
                    <use xlinkHref={`img/sprite.svg#icon-${icon}`} />
                </svg>
                <span>{name}</span>
            </a>
        </li>
    )
}