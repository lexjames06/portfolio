import React from 'react'
import kodflix from '../assets/images/kodflix.png'
import TBSW from '../assets/images/TBSW.png'
import './Projects.css'

export default function Projects() {
    return (
        <div className="projects">
            <div className="project-1">
                <div className="kodflix">
                    <img className="project-thumbnail kodflix-thumbnail" src={kodflix} />
                    <div className="project-text kodflix-text">
                        <div className="text-box-kodflix">
                            <h1>Kodflix</h1>
                            <h2>Kodflix is a Netflix inspired web-app</h2>
                            <h2>
                                While attending the Kodiri Bootcamp in London,
                                we were challenged to build this web-app following a task list
                                found on a private repo on Github
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-2">
                <div className="tbsw">
                    <img className="project-thumbnail tbsw-thumbnail" src={TBSW} />
                    <div className="project-text tbsw-text">
                        <div className="text-box-tbsw">
                            <h1>The B-Side Word Podcast</h1>
                            <h2>This is a landing page for a podcast I co-host</h2>
                            <h2>
                                The idea of the page is to quickly inform visitors
                                about the current episode and links of where to listen
                            </h2>
                            <h2>There is also the option to sign up to our newsletter</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}