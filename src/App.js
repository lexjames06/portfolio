import React from 'react';
import LandingPage from './front-end/components/LandingPage'
import Icons from './front-end/components/Icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <LandingPage />
        {/* <Icons /> */}
      </div>
      <div className="projects">
      </div>
    </div>
  );
}

export default App;
