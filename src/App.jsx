import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home, About, Skill, Navigation, Project, Footer } from './Pages';
import ParticleBackground from './Config/ParticleBackground';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Footer/>
        
      
    </BrowserRouter>
  );
}

export default App;
