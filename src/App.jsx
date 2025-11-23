import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Nav from './components/nav/nav'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
