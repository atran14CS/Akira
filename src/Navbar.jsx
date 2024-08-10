import './styles_for_componets/Navbar.css';
import logo from './img/AKIRA_LOGO2.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} id='akira-logo' alt="akira-logo" />
      <div className="nav-links">
        <h2>Home</h2>
        <h2>Profile</h2>
        <h2>Contact</h2>
      </div>
    </nav>
  );
}

export default Navbar;
