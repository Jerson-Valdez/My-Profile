import { Link } from 'react-scroll'
import './nav.css'
import { useEffect, useState } from 'react'
import { 
    IconInfoSquareRounded, 
    IconStar, 
    IconBriefcase, 
    IconAward, 
    IconMail, 
    IconSun, 
    IconMoon, 
    IconMenu4 
} from '@tabler/icons-react'

export default function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleTheme, setToggleTheme] = useState(localStorage.getItem('theme') || 'light')

    const navLink = [
        {name: 'About', to: 'about', icon: <IconInfoSquareRounded size={20} /> },
        {name: 'Skills', to: 'skills', icon: <IconStar size={20} /> },
        {name: 'Projects', to: 'projects', icon: <IconBriefcase size={20} /> },
        {name: 'Achievements', to: 'achievements', icon: <IconAward size={20} /> },
        {name: 'Contact', to: 'contact', icon: <IconMail size={20} /> },
    ]

    useEffect(() => {
        const body = document.body
        const storedTheme = localStorage.getItem('theme')

        if(storedTheme === 'light') {
            body.setAttribute('data-theme', 'light')
            setToggleTheme('light')
        } else if (storedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark')
            setToggleTheme('dark')
            document.getElementById('themeIcon').classList.add('dark')
        }
    }, [])

    function handleToggleTheme() {
        const body = document.body
        if(toggleTheme === 'dark') {
            setToggleTheme('light')
            body.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
            document.getElementById('themeIcon').classList.remove('dark')
        } else {
            setToggleTheme('dark')
            body.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
            document.getElementById('themeIcon').classList.add('dark')
        }
    }

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
                href='#intro'
                smooth={true} 
                duration={500} 
                spy={true}
                className="logo">
                <img src="/logo.svg" alt="Jerson Valdez Logo" className='nav-logo'/>
                <span className='nav-logo'>jv.</span>
            </Link>

            <ul id='links'>
                {navLink.map((link, i) =>{
                    return (
                        <li key={i}>
                            <Link 
                                to={link.to} 
                                href={`#${link.to}`}
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                activeClass='active-link' 
                                className='nav-link'>
                                
                                {link.icon} 
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="nav-right">
                <div className="theme-icon" id='themeIcon' onClick={handleToggleTheme}>
                    {toggleTheme === 'light' ? 
                        <IconSun size={15} fontWeight={500}/> 
                        : 
                        <IconMoon size={15} fontWeight={500}/>}
                </div>

                <Link 
                    to='contact' 
                    href='#contact' 
                    className='contact-btn'>
                        Contact Me
                </Link>
                
                <div className="menu-icon" onClick={handleToggleMenu} style={{ cursor: 'pointer' }}>
                    <IconMenu4 size={30} />
                </div>
            </div>
        </nav>
    )
}