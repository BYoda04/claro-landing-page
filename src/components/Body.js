import React from 'react';
import Carrusel from './Carrusel';
import Form from './Form';
import ImageProm from './ImageProm';

const Body = () => {

    return (
        <div className='body'>
            <ImageProm />
            <Form />
            <Carrusel />
        </div>
    );
};

export default Body;