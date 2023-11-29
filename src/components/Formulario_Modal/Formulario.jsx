import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [captcha, setCaptcha] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (             
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Formulario</h1>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <label htmlFor='apellido'>Apellido</label>
                    <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='captcha'>No soy un robot</label>
                    <input 
                        type="checkbox"
                        id='captcha'
                        name='captcha'
                        value={captcha}
                        onChange={(e)=> setCaptcha(e.target.value)} 
                    />
                    <input type="submit" />
                </form>
            
    )
}

export default Formulario;