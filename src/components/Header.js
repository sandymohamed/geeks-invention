import React, { useState } from 'react';
import './styles';
import { logo } from './assets';

// ---------------------------------------------------------------------------
const Header = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [menuClass, setMenuClass] = useState(false)
    const [navClass, setNavClass] = useState(false)

    const handleClick = (activeName) => {
        setActiveLink(activeName)
    }


    const handleMenueClick = () => {
        setMenuClass(!menuClass)
        setNavClass(!navClass)
    }



    return (
        <div className='header'>
            <div className='header-container'>
                <p rel="nofollow" href="index.html" className='logo-img'>
                    <img src={logo} alt="geeks" />
                </p>

                <p href="#" className={`device-menu ${menuClass ? 'open' : ''} `} onClick={() => handleMenueClick()}>

                    <div className="device-menu__i">
                        <span className='ft'></span>
                        <span className='sc'></span>
                        <span className='td'></span>
                    </div>
                </p>


                <ul className={`nav ${navClass ? 'active-nav' : ''} `}>

                    <li
                        className={`${activeLink === 'home' ? 'active' : ''} one`}
                        onClick={() => handleClick('home')}
                    > home
                    </li>

                    <li
                        className={`${activeLink === 'works' ? 'active' : ''} two`}
                        onClick={() => handleClick('works')}> works
                    </li>

                    <li
                        className={`${activeLink === 'technologies' ? 'active' : ''} one`}
                        onClick={() => handleClick('technologies')}>technologies
                    </li>

                    <li
                        className={`${activeLink === 'services' ? 'active' : ''} two`}
                        onClick={() => handleClick('services')}>services
                    </li>

                    <li
                        className={`${activeLink === 'compan' ? 'active' : ''} one`}
                        onClick={() => handleClick('compan')}>compan
                    </li>

                    <li
                        className={`${activeLink === 'contacts' ? 'active' : ''} two`}
                        onClick={() => handleClick('contacts')}>contacts
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header