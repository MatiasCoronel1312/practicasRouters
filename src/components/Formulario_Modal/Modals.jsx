import React from 'react'
import Modal from './Modal'
import Formulario from './formulario'
import { useModal } from './useModal'



const Modals = () => {
    
    const [isOpenForm, openModalForm, closeModalForm] = useModal(false)
    
  return (
    <div>
        <button onClick={openModalForm}>Formulario</button>
        <Modal isOpen={isOpenForm} closeModalForm={closeModalForm} >
            <Formulario/>
        </Modal>
    </div>
  )
}

export default Modals