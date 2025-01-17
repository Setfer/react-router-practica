

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import About from './pages/about/about'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'

function App() {


  return (
      <div>
        <Header/>
        <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        </Routes>
     </div>
   
  )
}

export default App
