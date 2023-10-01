// Contact.js
import React from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact({ formRef, toggleModal }) {
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        'UyxyNcBs2GtSr-xZp'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)
          // You can add further actions here, such as showing a success message or closing the modal.
          toggleModal() // Close the modal after sending the email.
        },
        (error) => {
          console.error('Email sending failed:', error.text)
          // Handle errors, e.g., show an error message to the user.
        }
      )
  }

  return (
    <div>
      <form className='cf' ref={formRef} onSubmit={sendEmail}>
        <div>
          <input type='text' placeholder='Full Name' name='from_name' />
          <input type='email' placeholder='Email' name='from_email' />
          <textarea placeholder='Message' name='message' />
        </div>
        <button type='submit' value='Send'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
