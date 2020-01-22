import React from 'react'
import frame from '../assets/images/landing image frame.svg'
import profile from '../assets/images/profile picture.png'
import './LandingPage.css'
import '../assets/images/landing background.svg'
import '../assets/fonts/DIN Alternate Regular/DIN Alternate Regular.otf'

export default function LandingPage() {
    return (
        <div className="container">
            <div className="profile-header">
                <img src={frame} className="frame" />
                <img src={profile} className="profile-picture" />
            </div>
        </div>
    );
}