import React from 'react';
import List from '../List';

import './Hotel.scss'

export default function Hotel(){
    return(
        <main className='hotel-view'>
            <div className='gallery'>
                <GalleryItem foto='hotel-1.jpg' alt='hotel 1' />
                <GalleryItem foto='hotel-2.jpg' alt='hotel 2' />
                <GalleryItem foto='hotel-3.jpg' alt='hotel 3' />
            </div>
            <Overview name='Hotel Las Palmas' stars={5} location='Albufeira Portugal' rating='8.6' votes='429' />
            <div className='detail'>
                <div className='description'>
                    <p className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className='paragraph'>
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <List arr={[
                        'Close to de beach',
                        'Breakfast included',
                        'Free airport shuttle',
                        'Air conditioning and heating',
                        'Pets allowed',
                        'We speak all languages',
                        'Perfect for families'
                    ]} />
                    <div className='recommend__count'>
                        <p className='paragraph'>
                            Lucy and other 3 friends recomend this hotel.
                        </p>
                        <div className='recommend__friends'>
                            <img src='img/user-3.jpg' alt='friend 1' className='recommend_photo' />
                            <img src='img/user-4.jpg' alt='friend 2' className='recommend_photo' />
                            <img src='img/user-5.jpg' alt='friend 3' className='recommend_photo' />
                            <img src='img/user-6.jpg' alt='friend 4' className='recommend_photo' />
                        </div>
                    </div>
                </div>
                <div className='user-reviews'>
                    User reviews
                </div>
            </div>
        </main>
    )
}

function GalleryItem(props){
    const { foto,alt } = props;

    return(
        <figure className='gallery__item'>
            <img src={`img/${foto}`} alt={alt} className='gallery__photo' />
        </figure>
    )
}

function Overview(props){
    const {name,stars,location,rating,votes} = props;

    let estrellas = [];
    for(let i=0; i<stars; i++){
        estrellas.push( 
            <svg className='overview__icon-star' key={i}>
                <use xlinkHref='img/sprite.svg#icon-star' />
            </svg>);
    }

    return(
        <div className='overview'>
            <h1 className='primary-heading'>
                {name}
            </h1>
            <div className='overview__stars'>
                {estrellas}
            </div>
            <div className='overview__location'>
                <svg className='overview__icon-location'>
                    <use xlinkHref='img/sprite.svg#icon-location-pin' />
                </svg>
                <button className='btn-inline'>{location}</button>
            </div>
            <div className='overview__rating'>
                <div className='overview__rating-average'>{rating}</div>
                <div className='overview__rating-count'>{votes} votes</div>
            </div>
        </div>
    )
}