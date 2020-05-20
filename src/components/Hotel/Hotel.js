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
                        'free wifi in all rooms',
                        'Air conditioning and heating',
                        'Pets allowed',
                        'We speak all languages',
                        'Perfect for families'
                    ]} />
                    <div className='recommend'>
                        <p className='recommend__count'>
                            Lucy and other 3 friends recomend this hotel.
                        </p>
                        <div className='recommend__friends'>
                            <img src='img/user-3.jpg' alt='friend 1' className='recommend__photo' />
                            <img src='img/user-4.jpg' alt='friend 2' className='recommend__photo' />
                            <img src='img/user-5.jpg' alt='friend 3' className='recommend__photo' />
                            <img src='img/user-6.jpg' alt='friend 4' className='recommend__photo' />
                        </div>
                    </div>
                </div>
                <div className='user-reviews'>
                    <Review 
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
                    name='Nick Smith'
                    foto='user-1.jpg'
                    date='Feb 23rd, 2017'
                    rate={7.8}
                    />
                    <Review 
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
                    name='Mary Thomas'
                    foto='user-2.jpg'
                    date='Sep 13th, 2017'
                    rate={9.3}
                    />

                    <button className='btn-inline'>Show All <span>&rarr;</span></button>
                </div>
            </div>
            <div className='cta'>
                <h2 className='cta__book-now'>
                    Good news! We have 4 free rooms for yout selected dates!
                </h2>
                <button className='btn'>
                    <span className='btn__visible'>Book now</span>
                    <span className='btn__invisible'>Only 4 rooms left</span>
                </button>
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

function Review(props){
    const {text,foto,name,date,rate} = props;

    return(
        <figure className='review'>
            <blockquote className='review__text'>
            {text}
            </blockquote>
            <figcaption className='review__user'>
                <img src={`img/${foto}`} alt='User 1' className='review__photo' />
                <div className='review__user-box'>
                    <p className='review__user-name'>{name}</p>
                    <p className='review__user-date'>{date}</p>
                </div>
                <div className='review__rating'>{rate}</div>
            </figcaption>
        </figure>
    )
}