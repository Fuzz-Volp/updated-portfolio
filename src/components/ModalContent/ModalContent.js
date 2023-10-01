// ModalContent.js
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Contact from '../Contact/Contact'

const ModalContent = ({ toggleModal }) => {
  const form = useRef()

  return (
    <div>
      <div className='modal'>
        <div className='modal-content'>
          <main>
            <Contact formRef={form} toggleModal={toggleModal} />
          </main>
          <footer>
            <button type='button' onClick={toggleModal}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}

ModalContent.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}

export default ModalContent
