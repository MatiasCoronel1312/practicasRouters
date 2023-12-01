import React, { useState } from 'react';
import { useForm } from './useForm';

const initialForm = {
    nombre: "",
    email: "",
    password:"",
    captcha: false,
};

const validationsForm = (form) => {

}  

const Formulario = () => {

    const {
        form,
        error,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm);

    return (             
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Formulario</h1>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        value={form.nombre}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={form.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={form.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='captcha'>No soy un robot</label>
                    <input 
                        type="checkbox"
                        id='captcha'
                        name='captcha'
                        value={form.captcha}
                        onChange={handleChange} 
                        required
                    />
                    <input type="submit" value="Ingresar" />
                </form>
            
    )
}

export default Formulario;