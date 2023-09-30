import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../Contact/Contact'

const ModalContent = ({ toggleModal }) => (
  <div>
    <div className='modal'>
      <div className='modal-content'>
        <header>
          <div className='close'>
            <span
              className='close-btn'
              onClick={toggleModal}
              onKeyDown={toggleModal}
              tabIndex={0}
              role='button'
            >
              &times;
            </span>
          </div>
        </header>
        <main>
          <Contact />
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

ModalContent.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}

export default ModalContent
