import './Footer.css'

const year = new Date().getFullYear()

const Footer = () => (
  <footer className='footer'>
    <> Copyright © {year}</>,
  </footer>
)

export default Footer
