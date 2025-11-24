import './about.css'
import jersonImage from '../../../assets/me/jerson-about.jpg'
import star from '../../../assets/float/star.svg'

export default function About() {
    const aboutData = [
        {title: 'Spark', description: 'My path to becoming an IT professional started in my first year of college. What began as an academic requirement quickly became a passion for problem-solving. I discovered that I thrive on the logic behind the screen.'},
        {title: 'Approach', description: 'I strive to build practical applications grounded in strong algorithmic foundations. Rather than relying on quick fixes, I focus on the underlying architecture to ensure efficiency.'},
        {title: 'Philosophy', description: 'I believe the best code is simple, readable, and serves a clear purpose. My goal is to eliminate unnecessary complexity and deliver software that is as practical as it is powerful.'}
    ]

    return (
        <section className="about-container" id='about' data-aos="fade-up" data-aos-duration="1000"> 
            <img className='float' src={star} alt=""/>
            <div className="img-container" data-aos="fade-right" data-aos-duration="1000">
                <img className='me' src={jersonImage} alt="Jerson" />
            </div>
            <div className="content" data-aos="fade-left" data-aos-duration="1000">
                <div className="about-header">
                    <div className="title">
                        <h2>About</h2>
                        <h2>Me</h2>
                    </div>
                    <p>You wanna know more about me?</p>
                </div>
                {aboutData.map((item, index) => (
                    <div key={index} className="about-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>  
    )
}