import About from '../../components/sections/about me/About'
import Achievement from '../../components/sections/achievements/Achievement'
import Contact from '../../components/sections/contact/Contact'
import Intro from '../../components/sections/intro/Intro'
import Projects from '../../components/sections/projects/Projects'
import Stacks from '../../components/sections/Stacks/Stacks'
import './home.css'

export default function Home() {
  return (
    <main className='home-page-container'>
        <Intro />
        <div className="line"></div>
        <About />
        <Stacks />
        <Projects />
        <Achievement />
        <Contact />
    </main>
  )
}