import About from '../../components/sections/about me/About'
import Intro from '../../components/sections/intro/Intro'
import './home.css'

export default function Home() {
  return (
    <div className='home-page'>
        <Intro />
        <About />
    </div>
  )
}