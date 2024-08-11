import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Profile from './Profile.jsx';
import Contact from './Contact.jsx';
import BlankLine from './BlankLine.jsx';

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
