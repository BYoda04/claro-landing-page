import React, { useState } from 'react';

const Form = () => {

    const [state,setState] = useState(false)
    const [send,setSend] = useState(false)

    const limit = (limit)=>{
        limit.value = limit.value.replace(/[^0-9]/g,'')
        setState(false)
        if (limit.value.length >= 9) {
            setState(true)
            return limit.value = limit.value.slice(0,9) 
        }
    }

    const submit = e=>{
        e.preventDefault()
        setSend(true)
    }

    return (
        <div className='form'>
            <form onSubmit={(e)=>submit(e)}>
                <div className='form-text'>
                    <p>Descubre nuestros servicios móviles</p>
                    <h3>Cámbiate a Claro y obtén 20% de descuento por 3 meses</h3>
                </div>
                <div className='form-input'>
                    <label htmlFor="number">Déjanos tu numero y te llamaremos</label>
                    <div>
                        <input type="number" id='number' placeholder='987654321' onChange={e=>limit(e.target)} maxLength='9'/>
                    </div>
                    <p>*Ingrese su numero sin anteponer el (51)</p>
                </div>
                <div className='form-button'>
                    <button className={state? 'boton':'boton disabled'} type={state? 'submit':'button'}>solicitar llamada</button>
                </div>
                <div className={send? 'submit':'submit none'} id='message'>
                    <p>En breve nos contactaremos con usted</p>
                </div>
            </form>
        </div>
    );
};

export default Form; 