import './styles_for_componets/Navbar.css';
import logo from './img/AKIRA_LOGO2.png';

const Navbar = () => {
  return (
    <nav id="home">
      <img src={logo} id='akira-logo' alt="akira-logo" />
      <div className="nav-links">
        <a href="#home" className='nav-op'><h2 className='nav-op'>Home</h2></a>
        <a href="#about" className='nav-op'><h2 className='nav-op'>About</h2></a>
        <a href="#contact" className='nav-op'><h2 className='nav-op'>Contact</h2></a>
      </div>
    </nav>
  );
}

export default Navbar;
