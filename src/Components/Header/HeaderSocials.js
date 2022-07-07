import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="http://linkedin.com" target='_blank'> <BsLinkedin/> </a>
        <a href="http://github.com" target='_blank'><GrGithub/> </a>
        <a href="http://instagram.com" target='_blank'><BsInstagram/> </a>
    </div>
  )
}

export default HeaderSocials