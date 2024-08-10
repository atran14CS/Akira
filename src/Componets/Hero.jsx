import '../styles_for_componets/Hero.css';
import akira from '../img/akira.gif';
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='flex-container'>
        <img src={akira} className='akira-logo' alt="akira-logo" />
        <ReactTyped className='type-animation-text'
          strings={[
            "System.out.println(Welcome! My name is Akira and I am a Software Developer. Feel free to contact me or check out my projects.);"
          ]}
          typeSpeed={70} // Speed at which typing happens
          backSpeed={40} // Speed at which typing is erased
          backDelay={2000} // Delay before starting to erase
          startDelay={500} // Delay before starting typing
          loop
        />
      </div>
    </div>
  );
}

export default Hero;
