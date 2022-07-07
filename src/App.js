import React from "react";
import Home from './home'
import About from './about'
import Skills from './skills'
import Works from './works'
import Contact from './Contact'
import Background from './background'

export default function(){

    return (
        <div className="root">
            <Home />
            <About />
            <Skills />
            <Works />
            <Contact />
            <Background />

        </div>
    )
}