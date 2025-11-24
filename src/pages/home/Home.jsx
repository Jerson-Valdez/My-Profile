import About from '../../components/sections/about me/About'
import Intro from '../../components/sections/intro/Intro'
import Stacks from '../../components/sections/Stacks/Stacks'
import './home.css'

export default function Home() {
  return (
    <main className='home-page-container'>
        <Intro />
        <div className="line"></div>
        <About />
        <Stacks />
    </main>
  )
}