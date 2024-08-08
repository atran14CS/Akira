import './styles_for_componets/Hero.css';
import potrait from './img/potrait.jpg';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='flex-container'>
        <img src={potrait} className='akira-potrait' alt="akira-potrait" />
        <p>Welcome to my Website</p>
      </div>
    </div>
  );
}

export default Hero;
