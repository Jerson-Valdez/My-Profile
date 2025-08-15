import './nav-bar.css';
import ThemeToggle from './ThemeToggle';

function NavBar(){
    return(
        <>
            <nav className='nav-bar'>
                <span className='me'>.jvaldez</span>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <ThemeToggle/>
            </nav>
            <br/>

        </>
    )
}
export default NavBar;