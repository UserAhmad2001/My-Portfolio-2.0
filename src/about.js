import React from "react";

export default function(){

    function anim(e) {
        e.target.style.animation = " letter-anim .5s linear forwards";
        e.target.style.color = " #34ffff";
    
        const t = setTimeout(() => {
          e.target.style.animation -= " letter-anim .5s linear forwards";
          e.target.style.color = " white";
          clearTimeout(t);
        }, 500);
      }
    function lettering(string){
        var a = []
        for(var i=0; i<string.length; i++){
          a.push(<span key={Math.random()} onMouseOver={anim}>{string[i]}</span>);
        }
        return a;
      }

    return (
        <div className="about-section">
            <h1>
                {lettering("Me, ")} <span> </span> 
                {lettering(" Myself")} <span> </span> 
                {lettering("  &")} <span> </span> 
                {lettering("  I")}  
            </h1>
            <p>I’m a Front-End Developer located in Poland.
                I have a serious passion for UI effects, animations 
                and creating intuitive, dynamic user experiences.
                <br></br>
                Well-organised person, problem solver, independent employee with high 
                attention to detail. Fan of MMA, outdoor activities, TV series and English 
                literature. A family person and father of two fractious boys,
                <br></br>
                Interested in the entire frontend spectrum and working on ambitious
                projects with positive people.</p>
            <a href="../assets/downloadable.pdf" download={"Ahmad mana's Resume.pdf"}>Download Resume</a>
        </div>
    )
}