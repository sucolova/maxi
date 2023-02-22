import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Greeting from './components/greeting';

function App() {
  return (


    <Router>

      <header>
        <NavLink to='/' className='NavLink'> Maximilian Melcher </NavLink>
        <NavLink to="/home" className='NavLink'> home </NavLink>
        <NavLink to='/about' className='NavLink'> about </NavLink>
      </header>

      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <footer>
        <p>lorem ipsjum lorem ipsum slsafj lasfdjhi asfkljasf lasdlkj</p>

        </footer>

    </Router>
  );
}

export default App;
