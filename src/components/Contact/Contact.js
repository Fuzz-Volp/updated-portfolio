import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { contact } from '../../portfolio'
import './Contact.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          function customAlert() {
            alert()
          }
          customAlert('message send successfully...')
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <form className='cf' ref={form} onSubmit={sendEmail}>
        <div>
          <input placeholder='Full Name' />
          <input placeholder='Email' />
          <input placeholder='Message' />
        </div>
      </form>
    </div>
  )
}

// const Contact = () => {
//   if (!contact.email) return null

//   return (
//     <section className='section contact center' id='contact'>
//       <h2 className='section__title'>Contact</h2>
//       <a href={`mailto:${contact.email}`}>
//         <span type='button' className='btn btn--outline'>
//           Email me
//         </span>
//       </a>
//     </section>
//   )
// }

export default Contact
