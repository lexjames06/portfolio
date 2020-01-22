import React from 'react'
import github from '../assets/icons/github.svg'
import './Icons.css'

export default function Icons() {
  return (
    <div className="icons">
      <div className="icon-hover">
        <div className="icon">
          <div className="icon-position">
            <img className="github" src={github} />
          </div>
        </div>
        <div className="icon-text">
          <h1 className="text">Github</h1>
        </div>
      </div>
      {/* <div className="icon">
          <img src={blog} />
        </div>
        <div className="icon">
          <img src={blog} />
        </div>
        <div className="icon">
          <img src={blog} />
        </div>
        <div className="icon">
          <img src={blog} />
        </div> */}
    </div>
  );
}