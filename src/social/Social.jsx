import React, { useState } from 'react';
import './social.css';
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {GoSmiley} from 'react-icons/go'
const Social = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='bod'>
    <div className={`menu ${menuActive ? 'active' : ''}`}>
      <div className="toggle" onClick={handleToggleClick}>
        <GoSmiley/>
      </div>

      <ul>
        <li style={{ '--i': 0, '--clr': '#1877f2' }}>
          <a href="https://www.facebook.com/profile.php?id=100004822953951">
           <BsFacebook/>
          </a>
        </li>
        <li style={{ '--i': 1, '--clr': '#25d366' }}>
          <a href="http://wa.me/9661696725">
            <BsWhatsapp/>
          </a>
        </li>
        <li style={{ '--i': 2, '--clr': '#1da1f2' }}>
          <a href="https://twitter.com/Anandshubham016">
            <BsTwitter/>
          </a>
        </li>
        <li style={{ '--i': 3, '--clr': '#FF5733' }}>
          <a href="https://www.linkedin.com/in/anand-shubham-7152201b7/">
            <CgProfile/>
          </a>
        </li>
        <li style={{ '--i': 4, '--clr': '#0a66c2' }}>
          <a href="https://www.linkedin.com/in/anand-shubham-7152201b7/">
            <BsLinkedin/>
          </a>
        </li>
        <li style={{ '--i': 5, '--clr': '#c32aa3' }}>
          <a href="https://www.instagram.com/shubham._.anand._/">
            <BsInstagram/>
          </a>
        </li>
        <li style={{ '--i': 6, '--clr': '#1b1e21' }}>
          <a href="https://github.com/Anand8216">
            <BsGithub/>
          </a>
        </li>
        <li style={{ '--i': 7, '--clr': '#ff0000' }}>
          <a href="https://studio.youtube.com/channel/UCrxUw0QZmkow5SGgc3R1mew">
            <BsYoutube/>
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Social;
