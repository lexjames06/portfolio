import React from 'react'
import blog from '../assets/icons/blog.svg'
import './Icons.css'

export default function Icons() {
    return (
      <div className="icons">
        <div className="icon">
          {/* <img src={blog} /> */}
          <div className="icon-text">
            <h2>Blog</h2>
          </div>
        </div>
        <div className="icon">
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
        </div>
      </div>
    );
  }