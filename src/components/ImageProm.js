import React from 'react';
import prom from '../img/prom.jpg'

const ImageProm = () => {
    return (
        <div className='img'>
            <div className='img-container'>
                <img src={prom} alt='img' />
            </div>
        </div>
    );
};

export default ImageProm;