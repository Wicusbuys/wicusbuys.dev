import React from 'react'
import MailIcon from '@/icons/mail.svg';
import LinkedinIcon from '@/icons/linkedin.svg';
import GithubIcon from '@/icons/github.svg';

const Sidebar = () => {
  return (
    <div className='sidemenu'>
        <a href="mailto:wicusbuys@gmail.com?" target="_blank" rel="noopener noreferrer">
          <MailIcon className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/wicusbuys/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className='icon' />
        </a>
        <a href="https://github.com/Wicusbuys" target="_blank" rel="noopener noreferrer">
          <GithubIcon className='icon' />
        </a>
        <div className="flex sidebar"></div>
    </div>
  )
}

export default Sidebar