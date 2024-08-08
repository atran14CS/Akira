import './styles_for_componets/Profile.css';
import MERN_CERTI from './img/MERN_CERTIFICATE.jpg';
import WEB_CERTI from './img/webdev.jpg';
import Virtual from './img/Virtual.jpg';
import GitProfile from './img/gitprofile.png';

const Profile = () => {
  return (
    <div>
        <h1 id='profile-h1'>Profile</h1>
        <h2 id='skills-h2'>Technical</h2>
        <div className='table-container'>
            <table className='table'>
                <tr>
                    <td>Java</td>
                    <td>React</td>
                    <td>HTML</td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>BootStrap</td>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Springboot</td>
                    <td>SQL</td>
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
        <div>
            <h2 id='skills-h2'>Projects</h2>
            <img src={GitProfile} alt="GitProfile" className='gitprofile' />
            <a href="https://github.com/atran14CS" id='gitlink'>Check out my projects here!</a>
        </div>
    </div>
  )
}

export default Profile;
