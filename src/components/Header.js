import React from 'react';
import claro from '../img/logo-claro-web.webp'

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <div className='header-text'>
                    Línea Exclusiva de Ventas
                </div>
                <div className='header-button'>
                    <button>
                        <a href="tel:016809828" >
                            <ion-icon name="call"></ion-icon>
                            <p>(01) 6809828</p>
                        </a>
                    </button>
                </div>
            </div>
            <div className='logo-container'>
                <div className='logo-img'>
                    <img src={claro}/>
                </div>
            </div>
        </header>
    );
};

export default Header;