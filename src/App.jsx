import React from 'react'
import RoutePage from './components/pages/Routes/RoutePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/common/Navbar'
import HomeNavbar from './components/common/HomeNavbar'
import Footer from './components/common/Footer'
import Home from './components/pages/Home/Home'
import Privacy from './components/common/Privacy'

const App = () => {
  return (
    <>
      <Router>
      <HomeNavbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route exact path='/routes/:metroname/:source/:destination' element={<RoutePage />}></Route>
          <Route exact path='/privacy' element={<Privacy/>}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App