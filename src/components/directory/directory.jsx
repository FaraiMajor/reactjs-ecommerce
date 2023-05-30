import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from '../slideshow/slider';
import DirectoryItem from '../directory-item/directory-item'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import './directory.scss';

const categories = [
    {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        route: 'shop/hats',
    },
    {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: 'shop/womens',
    },
    {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        route: 'shop/mens',
    },
];

const Directory = () => {
    const navigate = useNavigate();
    const goToShopHandler = () => {
        navigate('/shop');
    };

    return (
        <>
            <div className='banner-container'>
                {/* <img className='banner-image' src={Banner} /> */}
                <Slider className='slider' />
                <div className='category-body-container'>
                    <h2>Best Collection in the Whole World</h2>
                    <span>It’s time to step outside your color comfort zone. Our collection is truly our of this world</span>
                    <p onClick={goToShopHandler}>Shop Now</p>
                </div>
            </div >
            <div className='directory-container'>
                {categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))}
            </div>
        </>
    );
};

export default Directory;