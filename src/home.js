import React from "react";

export default function(){

    function anim(e){
        e.target.style.animation = " letter-anim .5s linear forwards"
        e.target.style.color = " #34ffff"

        const t= setTimeout(() => {
            e.target.style.animation -= " letter-anim .5s linear forwards"
            e.target.style.color = " white"
            clearTimeout(t)
        }, 500);
    }
    function lettering(string){
        var a = []
        for(var i=0; i<string.length; i++){
            a.push(<span key={Math.random()} onMouseOver={anim}>{string[i]}</span>);
        }
        return a;
    }
    function toggleContactSection(){
        document.querySelector('.contact-section').click()
    }

    return (
        <div className="home-section">
            <div className="home-txt">
                <h1>
                    {lettering("Hi,")} <br />
                    {lettering("I'm Ahmad,")} <br />
                    {lettering("Web developer.")} 
                </h1>
                
                <p>Front End Engineer / Web Designer</p>
                <p className="home-contact" onClick={toggleContactSection}>Contact me!</p>
            </div>
        </div>
    )
}