import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Componet from './Navbar.jsx';
import Hero from './Hero.jsx';
import Profile from './Profile.jsx';
import Contact from './Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Componet />
    <Hero />
    <Profile />
    <Contact />
  </React.StrictMode>,
)
