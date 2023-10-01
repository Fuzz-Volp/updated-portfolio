// Modal.js
import React, { useState } from 'react'
import ModalContent from '../ModalContent/ModalContent'

function Modal() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='modal'>
      <header className='modal-header'>
        <button
          type='button'
          className='modal-button'
          style={{ cursor: 'pointer' }}
          onClick={toggleModal}
        >
          Contact Me
        </button>
      </header>
      {showModal ? <ModalContent toggleModal={toggleModal} /> : null}
    </div>
  )
}

export default Modal
