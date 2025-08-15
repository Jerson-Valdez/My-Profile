import NavBar from "./components/NavBar";
import "./index.css";
import ProfileImage from "./assets/Jerson.jpg";

function App() {
  return (
    <>
      <NavBar/>
      <header className="hero">
        <div className="hero-text">
          <h1>Jerson Patrick Valdez</h1>
          <p className="tagline">Aspiring Software Developer</p>
          <div className="buttons">
            <a href="#projects" className="btn primary">View My Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-img">
          <img src={ProfileImage} alt="Profile Photo"/>
        </div>
      </header>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am a second-year BSIT student at Bulacan State University, pursuing
          a career in software development. I am currently focusing on
          full-stack development and improving my Java skills.
        </p>
      </section>

      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skill">
          <span>Java</span>
          <div className="progress">
            <div style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>PHP</span>
          <div className="progress">
            <div style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>HTML/CSS</span>
          <div className="progress">
            <div style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>MySQL</span>
          <div className="progress">
            <div style={{ width: "68%" }}></div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <img src="hotel.png" alt="Hotel Reservation System" />
            <h3>Hotel Reservation System</h3>
            <p>
              A Java-based hotel booking management system with custom linked
              list implementation.
            </p>
          </div>
          <div className="project-card">
            <img src="crud.png" alt="CRUD System" />
            <h3>CRUD System</h3>
            <p>
              A PHP CRUD system for managing user profiles, accounts, and
              transactions.
            </p>
          </div>
          <div className="project-card">
            <img src="portfolio.png" alt="Personal Portfolio" />
            <h3>Personal Portfolio</h3>
            <p>
              This website showcasing my skills, projects, and career journey.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        <p>
          © 2025 Jerson Patrick Valdez | <a href="#">GitHub</a> |{" "}
          <a href="#">Email</a>
        </p>
      </footer>
    </>
  );
}

export default App;
