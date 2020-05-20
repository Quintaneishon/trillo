import React from 'react';

import './Header.scss';

export default function Header(){
    return(
        <header className='header'>
            <img src='img/logo.png' alt='trillo logo' className='logo' />
            <form action='#' className='search'>
                <input type='text' className='search__input' placeholder='Busca hoteles'/>
                <button className='search__button'>
                    <svg className='search__icon'>
                        <use xlinkHref='img/sprite.svg#icon-magnifying-glass' />
                    </svg>
                </button>
            </form>
            <nav className='user-nav'>
                <IconBox icon='bookmark' num='7'/>
                <IconBox icon='chat' num='13'/>
                <div className='user-nav__user'>
                    <img src='img/user.jpg' alt='User' className='user-nav__user-photo' />
                    <span className='user-nav__user-name'>Jonas</span>
                </div>

            </nav>
        </header>
    )
}

function IconBox(props){
    const { icon,num } = props;
    
    return(
        <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
                <use xlinkHref={`img/sprite.svg#icon-${icon}`} />
            </svg>
            <span className='user-nav__notification'>{num}</span>
        </div>
    )

}