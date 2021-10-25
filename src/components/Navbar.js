import { Link } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react';
import { links } from '../data';

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'.
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      // @ts-ignore: Object is possibly 'null'.
      linksContainerRef.current.style.height = `${linksHeight+14}px`;
    } else {
      // @ts-ignore: Object is possibly 'null'.
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'> 
            <Link to='/'>
                <div className='nav-logo'>
                    <h1>🎮Trade Game Here</h1>
                </div>
            </Link>
            <button className='nav-toggle' onClick={toggleLinks}>
              {!showLinks && <p>&#43;</p>}
              {showLinks && <p>&#8722;</p>}
            </button>
          </div>
          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url} onClick={toggleLinks}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;