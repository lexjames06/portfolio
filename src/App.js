import React from 'react';
import LandingPage from './front-end/components/LandingPage'
import Icons from './front-end/components/Icons'
import Projects from './front-end/components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <LandingPage />
        <Icons />
      </div>
      <Projects />
    </div>
  );
}

export default App;
