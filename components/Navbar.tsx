import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      if (!isMenuVisible) {
        const menuHeight = menuRef.current.scrollHeight;
        menuRef.current.style.height = `${menuHeight}px`;
      } else {
        menuRef.current.style.height = "0";
      }
    }
    setIsMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuVisible(false);
        if (menuRef.current) {
          menuRef.current.style.height = "auto";
        }
      } else {
        if (menuRef.current) {
          menuRef.current.style.height = "0";
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`nav ${isMenuVisible ? "mobile--nav--is--visible" : ""}`}>
      <Link href="/" className="nav-name">Wicus Buys </Link>
      <div className="nav-menu-icon" onClick={toggleMenu}>
        <div className="line">
          <div className="content"></div>
        </div>
        <div className="line">
          <div className="content"></div>
        </div>
      </div>
      <ul className="nav-menu" ref={menuRef}>
        <li className="nav-item"><a href="#intro">Intro</a></li>
        <li className="nav-item"><a href="#projects">Projects</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#timeline" >Timeline</a></li>
        <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
        <li className="nav-button"><a href="/images/Wicus (Willem Jacobus) Buys Developer Resume 2024.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
