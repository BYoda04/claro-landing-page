import React, { useState } from 'react';
import PhoneContainer from './PhoneContainer';
import phones from '../utils/phones';

const Carrusel = () => {

    const [number,setNumber] = useState(0)
    let translate3d = `translate3d(${-91*number}vw,0px,0px)`

    const add = ()=>{
        if (number<phones.length-1) {
            setNumber(number+1);
        }
    };

    const remove = ()=>{
        if (number>0) {
            setNumber(number-1);
        }
    };

    console.log(number);

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
                        {phones.map(phone=>(
                            <li key={phone.id} style={{transform:translate3d}}>
                                <PhoneContainer phone={phone}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>  
        </div>
    );
};

export default Carrusel;