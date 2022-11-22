import React from 'react'; 
import "./fotter2.css"

import { SocialIcon } from 'react-social-icons';



function Footer2(){
  return(
    <div>
      <SocialIcon className="social" network="twitter" fgColor="white" style={{ height: 30, width: 30 }} url="https://twitter.com/MeshalOdah" />
      <SocialIcon className="social" network="facebook" fgColor="white" style={{ height: 30, width: 30 }} url="https://www.facebook.com/44a44" />
      <SocialIcon className="social" network="discord" fgColor="white" style={{ height: 30, width: 30 }} url="https://discordapp.com/users/Claw11#5089" />
    </div>
  )
}

export default Footer2;