import React from 'react';

const PhoneContainer = ({phone}) => {
    return (
        <div>
            <div className='product'>
                <div className='product-img'>
                    <img src={phone.img} alt='img'/>
                </div>
                {window.screen.width>1120?
                <>
                    <div className='product-title'>
                        <h3>{phone.name}</h3>
                    </div>
                    <div className='product-text'>
                        <p>Precio Antes: <span>{phone.lastPrice}</span></p>
                        <p>{phone.plan}</p>
                        <h3><span>S/</span>{phone.price}</h3>
                        <p>Precio del Equipo</p>
                    </div>
                </>:
                <div className='display-flex'>
                    <div className='product-title'>
                        <h3>{phone.name}</h3>
                    </div>
                    <div className='product-text'>
                        <p>Precio Antes: <span>{phone.lastPrice}</span></p>
                        <p>{phone.plan}</p>
                        <h3><span>S/</span>{phone.price}</h3>
                        <p>Precio del Equipo</p>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default PhoneContainer;