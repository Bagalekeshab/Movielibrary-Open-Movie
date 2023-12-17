import React from 'react'
import './App.css'
import Home from './Home.js';
import Singlemovie from './Components/Singlemovie.js';
import { Routes, Route} from "react-router-dom";






function App() {
  return (
    <main >
      <Routes>

      <Route path="/" element ={<Home/>}/>
      <Route path = "movie/:id" element = {<Singlemovie/>}/>
     
</Routes>
      
    </main>

    
  );
}

export default App;
