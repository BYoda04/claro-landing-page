import { React, useState } from 'react';
import PhoneContainer from './PhoneContainer';
import phones from '../utils/phones';

const Carrusel = () => {

    const [number,setNumber] = useState(0)

    const add = ()=>{
        if (number<phones.length-1) {
            setNumber(number+1);
        } else {
            setNumber(0)
        }
    };

    const remove = ()=>{
        if (number>0) {
            setNumber(number-1);
        } else {
            setNumber(2)
        }
    };

    return (
        <div className='carrusel-container'>
            <div className='title'>
                <h2>Los equipos más pedidos</h2>
            </div>
            <div className='row-directions'>
                <div className='row-left' onClick={()=>remove()}>
                    <ion-icon name="chevron-back-circle"></ion-icon>
                </div>
                <div className='row-right' onClick={()=>add()}>
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
            <div className='carrusel-phone-container'>
                <div className='carrusel-phone'>
                    <ul id='carrusel'>
                        {window.screen.width>1120? 
                        <>
                            <li>
                                <PhoneContainer phone={phones[number]}/>
                            </li>
                            <li>
                                <PhoneContainer phone={number+1<=phones.length-1? phones[number+1] : phones[number-5]}/>
                            </li>
                            <li>
                                <PhoneContainer phone={number+2<=phones.length-1? phones[number+2] : phones[number-4]}/>
                            </li>
                        </>:
                        <>
                            <li>
                                <PhoneContainer phone={phones[number]}/>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>  
        </div>
    );
};

export default Carrusel;