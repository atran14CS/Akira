import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../Componets/Navbar.jsx'
import Hero from '../Componets/Hero.jsx';
import Profile from '../Componets/Profile.jsx';
import Contact from '../Componets/Contact.jsx';
import BlankLine from '../Componets/BlankLine.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <BlankLine />
    <Hero />
    <BlankLine />
    <Profile />
    <BlankLine />
    <Contact />
  </React.StrictMode>,
)
