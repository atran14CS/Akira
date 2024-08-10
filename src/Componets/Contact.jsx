import '../styles_for_componets/Contact.css';
import { FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact-box' id="contact">
      <h2 id='skills-h2'>Contact</h2>
      <div className='contact-flexbox'>
        <div id='link'>
          <a href="https://www.linkedin.com/in/akiratran/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin color='#0a66c2' className='contact-icon' />
            Linkedin Profile
          </a>
        </div>
        <div id='email'>
          <MdOutgoingMail color='#c71610' className='contact-icon' />
          <p>akriatrandev@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
