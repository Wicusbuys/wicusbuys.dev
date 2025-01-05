import React from 'react'
import MailIcon from '@/icons/mail.svg';
import LinkedinIcon from '@/icons/linkedin.svg';
import GithubIcon from '@/icons/github.svg';

const Sidebar = () => {
  return (
    <div className='sidemenu'>
        <MailIcon className='icon' />
        <LinkedinIcon className='icon' />
        <GithubIcon className='icon' />
        <div className="flex sidebar"></div>
    </div>
  )
}

export default Sidebar