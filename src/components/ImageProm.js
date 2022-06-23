import React from 'react';
import desktop from '../img/banner-1.png'
import movil from '../img/banner-2.png'

const ImageProm = () => {
    return (
        <div className='img'>
            <div className='img-container'>
                <img src={window.screen.width>1120? desktop : movil} alt='img' />
            </div>
        </div>
    );
};

export default ImageProm;