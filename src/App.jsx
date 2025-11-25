import { BrowserRouter, Route, Routes, useLocation, matchPath } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import Nav from './components/nav/nav'
import Project from './pages/project/Project'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </>
  )
}

function AppWrapper() {
  const location = useLocation()
  const noNavPaths = ['/project/:id'];
  const hideNav = noNavPaths.some(path => matchPath(path, location.pathname));

  return(
    <>
      {!hideNav && (
          <Nav />
        )}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
    </>
  )
}
export default App
