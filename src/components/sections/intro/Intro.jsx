import { Link } from 'react-scroll'
import './intro.css'

export default function Intro() {
  return (
    <section className="intro-container" id='intro' data-aos="fade-up" data-aos-duration="1000">
      <div className="gradient-box">
        <div className="content">
          <h3>FULL STACK DEVELOPER</h3>
          <h1>Hi I'm</h1>
          <h1>Jerson Patrick Valdez</h1>
          <p>My passion lies in the logic behind the screen. 
            I am constantly refining my skills to build applications that are as efficient as they are useful. 
            I’m ready to bring my dedication to simplicity and practicality to a professional one.
          </p>

          <div className="btn-container">
            <Link to="projects" smooth={true} duration={500} spy={true} className='view-work-btn'>
              View My Work 
              <i className='ti ti-arrow-right'></i>
            </Link>
            <Link to="contact" smooth={true} duration={500} spy={true} className='get-in-touch-btn'>
              Get In Touch 
            </Link>
          </div>

          <div className="quick-link">
            <a target='blank' href="https://github.com/Jerson-Valdez"><i className='ti ti-brand-github'></i></a>
            <a target='blank' href="https://www.linkedin.com/in/jerson-valdez-962225382/"><i className='ti ti-brand-linkedin'></i> </a>
          </div>
        </div>
        
        <img src="/assets/me/jerson-intro.png" alt="Jerson Patrick Valdez"/>
      </div>
    </section>
  )
}