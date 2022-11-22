import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/kirilpetkov" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KirilPetkov" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/KoinPetkov" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials