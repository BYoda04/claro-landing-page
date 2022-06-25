import { React, useEffect, useRef } from 'react';
import phones from '../utils/phones';
import PhoneContainer from './PhoneContainer';

const Carrusel = () => {

    const slideShow = useRef(null);

    const add = ()=>{
        if (slideShow.current.children.length>0) {
            const firstElement = slideShow.current.children[0];
            slideShow.current.style.transition = `1000ms ease-out all`;
            if (window.screen.width>1120) {
                slideShow.current.style.transform = `translateX(-20vw)`;
            } else {
                slideShow.current.style.transform = `translateX(-98vw)`;
            }
            const endTransicion = ()=>{
                slideShow.current.style.transition = `none`;
                slideShow.current.style.transform = `translateX(0)`;
                slideShow.current.appendChild(firstElement);
                slideShow.current.removeEventListener('transitionend',endTransicion)
            }
            slideShow.current.addEventListener('transitionend',endTransicion)
        }
    };

    const remove = ()=>{
        if (slideShow.current.children.length>0) {
            const index = slideShow.current.children.length-1
            const lastElement = slideShow.current.children[index];
            slideShow.current.insertBefore(lastElement,slideShow.current.firstChild)
            slideShow.current.style.transition = `none`;
            if (window.screen.width>1120) {
                slideShow.current.style.transform = `translateX(-20vw)`;
            } else {
                slideShow.current.style.transform = `translateX(-98vw)`;
            }
            setTimeout(() => {
                slideShow.current.style.transition = `1000ms ease-out all`;
                slideShow.current.style.transform = `translateX(0)`;
            }, 50);
        }
    };

    useEffect(() => {
        setInterval(() => {
            add()
        }, 3000);
    }, [])
    
    

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
                    <div className='carrusel-phone-div' ref={slideShow}>
                        {phones.map(phone=>(
                            <PhoneContainer phone={phone} key={phone.id}/>
                        ))}
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Carrusel;