import React from "react";
import Home from './home'
import About from './about'
import Skills from './skills'
import Works from './works'
import Background from './background'

export default function(){

    return (
        <div className="root">
            <Home />
            <About />
            <Skills />
            <Background />
            <Works />
            
            <div className="loading">
                <img src="" alt="" />
                <p>Loading....</p>
            </div>
        </div>
    )
}