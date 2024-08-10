import '../styles_for_componets/Profile.css';
import MERN_CERTI from '../img/MERN_CERTIFICATE.jpg';
import WEB_CERTI from '../img/webdev.jpg';
import Virtual from '../img/Virtual.jpg';
import GitProfile from '../img/gitprofile.png';
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { ReactTyped } from 'react-typed';

const Profile = () => {
  return (
    <div className='about-section' id="about">
        <h2 id='skills-h2'>Technical</h2>
        <div className='table-container'>
            <table className='table'>
                <tr>
                    <td>Java <FaJava className='skill-icons' color="#007396" /></td>
                    <td>React <FaReact className='skill-icons' color="#00d8ff" /></td>
                    <td>HTML <RiHtml5Fill className='skills-icon' color='#e34c26'/></td>
                </tr>
                <tr>
                    <td>JavaScript <RiJavascriptFill className='skill-icons' color="#F7DF1E" /></td>
                    <td>BootStrap <FaBootstrap className='skills-icon' color='#563d7c'/></td>
                    <td>CSS <FaCss3Alt className='skills-icon' color='#264de4'/> </td>
                </tr>
                <tr>
                    <td>Python <SiPython className='skills-icon' color='#007396'/></td>
                    <td>Springboot <SiSpringboot className='skills-icon' color='#A7FC00'/></td>
                    <td>SQL <BsFiletypeSql className='skills-icon' color='#00758f'/> </td>
                </tr>
            </table>
        </div>
        <div>
            <h2 id='skills-h2'>Certification</h2>
            <div className='certificate-box'>
                <img src={MERN_CERTI} alt="MERN_CERTIFICIATE" className='certificate' />
                <img src={WEB_CERTI} alt="WEB_CERTIFICIATE" className='certificate' />
                <img src={Virtual} alt="Virutal_CERTIFICATE" className='certificate' />
            </div>
        </div>
        <h2 id='skills-h2'>Projects</h2>
        <div className='project-box'>
            <a href="https://github.com/atran14CS"  target="_blank" id='gitlink'> <img src={GitProfile} alt="GitProfile" className='gitprofile'/></a>
            <ReactTyped className='project-text'
                strings={[
                    "Click the github icon to see my projects!"
                ]}
                typeSpeed={70}
                backSpeed={100}
                backDelay={2000}
                startDelay={500}
                loop
            />
        </div>
    </div>
  );
}

export default Profile;
