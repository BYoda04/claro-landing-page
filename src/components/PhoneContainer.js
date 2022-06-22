import React from 'react';
import iphone from '../img/iphone13.png'

const PhoneContainer = ({phone}) => {
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={phone.img} />
            </div>
            <div className='product-title'>
                <h3>{phone.name}</h3>
            </div>
            <div className='product-text'>
                <p>Precio Antes: <span>{phone.lastPrice}</span></p>
                <p>{phone.plan}</p>
                <h3><span>S/</span>{phone.price}</h3>
                <p>Precio del Equipo</p>
            </div>
        </div>
    );
};

export default PhoneContainer;