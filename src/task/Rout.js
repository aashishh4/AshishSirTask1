// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // corrected import
import About from './About';
import Login from './Login';
import Home from './Home';
import Dasboard from './Dasboard'; // corrected import
import Protected from './Protected';

function App() {
  return (
    <Routes>
     <Route path='/about' element={<Protected Component={About}/>}/>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path="/dasboard" element={<Protected Component={Dasboard}/>}/>

    </Routes>

  );
}

export default App;
