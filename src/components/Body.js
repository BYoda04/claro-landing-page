import React from 'react';
import Carrusel from './Carrusel';
import Form from './Form';
import ImageProm from './ImageProm';

const Body = () => {

    return (
        <div className='body'>
            {window.screen.width>1120?
            <>
                <div className='desktop'>
                    <ImageProm />
                    <Carrusel />
                </div>
                <Form />
            </>:
            <>
                <ImageProm />
                <Form />
                <Carrusel />
            </>}
        </div>
    );
};

export default Body;