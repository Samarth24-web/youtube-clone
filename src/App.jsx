import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/video/Video'
import './App.css'

function App() {
  const [sidebar , setSidebar]=useState(false);
  return (
    <>
    <NavBar setSidebar={setSidebar}></NavBar>
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:catagoryId/:videoId' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
