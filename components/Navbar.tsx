import React from 'react'

const Navbar = () => {
  return (
        <nav className='text-white flex w-full overflow-hidden justify-between items-center px-6'>
            <div className="flex">
                <p className='nav-brand'>Wicus Buys</p>
            </div>
            <div className="flex">
                <a className='nav-item'>Intro</a>
                <a className='nav-item'>Work</a>
                <a className='nav-item'>About</a>
                <a className='nav-item'>Education</a>
                <a className='nav-item'>Testimonials</a>
                <a className='nav-item'>Contact</a>
                <a className='nav-button'>Resume</a>
            </div>
        </nav>
  )
}

export default Navbar