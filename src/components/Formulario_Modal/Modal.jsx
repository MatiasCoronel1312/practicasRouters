import React from 'react'
import Formulario from './formulario'

const Modal = ({children, isOpen, closeModalForm}) => {
    const handleModalContainerClick = e => e.stopPropagation()
  return (
        <article className={`modal ${isOpen&&"isOpen"}`} onClick={closeModalForm}>
            <div className='modalContainer' onClick={handleModalContainerClick}>
                <button onClick={closeModalForm} className='modalClose'>X</button>
                {children}            
            </div>        
        </article>
  )
}

export default Modal