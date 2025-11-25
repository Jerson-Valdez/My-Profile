import { Link } from 'react-scroll'
import './nav.css'
import logo from '../../../public/logo.svg'
import { useState } from 'react'

export default function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const navLink = [
        {name: 'About', to: 'about', icon: 'ti ti-info-square-rounded' },
        {name: 'Skills', to: 'skills', icon: 'ti ti-star' },
        {name: 'Projects', to: 'projects', icon: 'ti ti-briefcase' },
        {name: 'Achievements', to: 'achievements', icon: 'ti ti-award' },
        {name: 'Contact', to: 'contact', icon: 'ti ti-mail' },
    ]

    function handleToggleMenu() {
        const linkStyle = document.getElementById('links').style
        if(!toggleMenu) {
            setToggleMenu(true)
            linkStyle.right = '0'
        } else {
            setToggleMenu(false)
            linkStyle.right = '-100%'
        }
    }

    return (
        <nav className='nav-container' data-aos="fade-down">
            <Link 
                to={'intro'} 
                smooth={true} 
                duration={500} 
                spy={true}
                className="logo">
                <img src={logo} alt="Jerson Valdez Logo" className='nav-logo'/>
                <span className='nav-logo'>jv.</span>
            </Link>
            <ul id='links'>
                {navLink.map((link, i) =>{
                    return (
                        <li key={i}>
                            <Link 
                                to={link.to} 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                activeClass='active-link' 
                                className='nav-link'>

                                <i className={link.icon}></i>{link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="nav-right">
                <i className='ti ti-sun'></i>
                <Link to='contact' className='contact-btn'>Contact Me</Link>
                <i className='ti ti-menu-4' onClick={handleToggleMenu}></i>
            </div>
        </nav>
    )
}