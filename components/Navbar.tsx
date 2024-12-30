import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`nav ${isMenuVisible ? 'mobile--nav--is--visible' : ''}`}
    >
      <h1 className="nav-name">Wicus Buys</h1>
      <div className="nav-menu-icon" onClick={toggleMenu}>
        <div className="line">
          <div className="content"></div>
        </div>
        <div className="line">
          <div className="content"></div>
        </div>
      </div>
      <ul className="nav-menu">
        <li className="nav-item"><a>Intro</a></li>
        <li className="nav-item"><a>Projects</a></li>
        <li className="nav-item"><a>About</a></li>
        <li className="nav-item"><a>Timeline</a></li>
        <li className="nav-item"><a>Testimonials</a></li>
        <li className="nav-button"><a>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
