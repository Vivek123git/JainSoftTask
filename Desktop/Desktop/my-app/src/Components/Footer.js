import React from 'react'
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
  return (
    <div className='Box'>
      <div className='Footer'>
        <div className='Foot'>
          <LinkedInIcon style={{ color: 'white', fontSize: 'xx-large', marginRight: '10px' }} />
          <FacebookIcon style={{ color: 'white', fontSize: 'xx-large', marginRight: '10px' }} />
          <TwitterIcon style={{ color: 'white', fontSize: 'xx-large', marginRight: '10px' }} />
          <InstagramIcon style={{ color: 'white', fontSize: 'xx-large', marginRight: '10px' }} />
        
        <div className='RightFoot'>
        <ShopIcon style={{ color: 'white', fontSize: 'xx-large', marginRight: '10px' }} />
        <AppleIcon style={{ color: 'white', fontSize: 'xx-large', marginRight: '10px' }} />
        </div>
        </div>

      </div>
    </div>

  )
}

export default Footer;
