import React from 'react'
import MailIcon from '@/icons/mail.svg';
import LinkedinIcon from '@/icons/linkedin.svg';
import GithubIcon from '@/icons/github.svg';

const Sidebar = () => {
  return (
    <div className='absolute bottom-0 left-20 flex flex-col w-auto'>
        <MailIcon className='icon text-{#505050;}' />
        <LinkedinIcon className='icon' />
        <GithubIcon className='icon' />
        <div className="flex sidebar"></div>
    </div>
  )
}

export default Sidebar