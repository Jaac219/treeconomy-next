import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons' 

const BChat = () => {
  const st = {
    position:"fixed",
    width:"60px",
    height:"60px",
    bottom:"30px",
    right:"30px",
    backgroundColor:"#25d366",
    color:"#FFF",
    borderRadius:"50px",
    textAlign:"center",
    fontSize:"30px",
    // boxShadow: "2px 2px 3px #000000",
    zIndex:"100"
  }
  return (
    <div className="whatsapp-button">
      <a href="https://wa.me/573107464006" style={st} target="_blanck" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} style={{marginTop:"16px"}}/>
      </a>
    </div>
  );
};

export default BChat;