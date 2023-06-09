import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import FaceBook from '@iconscout/react-unicons/icons/uil-facebook';
import GitHub from '@iconscout/react-unicons/icons/uil-github';

export default function Footer() {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}} />
      <div className="f-content">
        <span>hariomchouhan430@gmail.com</span>
        <div className="f-icons">
            <Insta color='white' size='3rem' />
            <FaceBook color='white' size='3rem' />
            <GitHub color='white' size='3rem' />
        </div>
      </div>
    </div>
  )
}
