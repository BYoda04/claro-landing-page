import React from 'react';
import Carrusel from './Carrusel';
import Form from './Form';

const Body = () => {

    return (
        <div className='body'>
            {window.screen.width>1120?
            <>
                <div className='desktop'>
                    <Carrusel />
                </div>
                <Form />
            </>:
            <>
                <Carrusel />
                <Form />
            </>}
        </div>
    );
};

export default Body;