import React from 'react'; 
import "./fotter2.css"
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



function Footer2(){
  return(
    <div>
      <SocialIcon className="social" style={{ height: 30, width: 30 }} url="https://twitter.com/MeshalOdah" />
      <SocialIcon className="social" style={{ height: 30, width: 30 }} url="https://www.facebook.com/44a44" />
      <SocialIcon className="social" style={{ height: 30, width: 30 }} url="https://www.instagram.com/binodah1/" />
      <SocialIcon className="social" style={{ height: 30, width: 30 }} url="https://discordapp.com/users/Claw11#5089" />
    </div>
  )
}

export default Footer2;