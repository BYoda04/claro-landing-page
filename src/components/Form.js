import React from 'react';

const Form = () => {
    return (
        <div className='form'>
            <form>
                <div className='form-text'>
                    <p>Descubre nuestros servicios móviles</p>
                    <h3>Cámbiate a Claro y obtén 20% de descuento por 3 meses</h3>
                </div>
                <div className='form-input'>
                    <label htmlFor="number">Déjanos tu numero y te llamaremos</label>
                    <div>
                        <input type="number" id='number' placeholder='987654321'/>
                    </div>
                    <p>*Ingrese su numero sin anteponer el (51)</p>
                </div>
                <div className='form-button'>
                    <button>solicitar llamada</button>
                </div>
            </form>
        </div>
    );
};

export default Form; 