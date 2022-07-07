import React from "react";

export default function () {

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
  React.useEffect(()=>{
    const myTags = [
      'VanillaJS', 'CSS', 'HTML',
      'VS', 'SASS', 'React',
      'Java', 'git', 'Bootstrap',
      'REST', 'Node.js', 'CDN',
      'JSON', 'npm', 'Typescript',
  ];

  var options = {

    // radius in px
    radius: 200,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
    keep: true
  
  }

  var tagCloud = TagCloud('.content', myTags,options); 
  //To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.content').style.color = random_color;

  },[])


  return (
    <div className="skills-section">
      <div className="skills-txt">
      <h1>
        {lettering('Experience')}
        <span></span> <span onMouseOver={anim}>&</span>
        <br />
        {lettering('Education')}
      </h1>
      <p>
        Since beginning my journey as a freelance developer nearly 10 years ago,
        I’ve done remote work for agencies, consulted for startups, and
        collaborated with talented people to create web products for both
        business and consumer use.
        <br />
        I create successful responsive websites that are fast, easy to use, and
        built with best practices. The main area of my expertise is front-end
        development, HTML, CSS, JS, building small and medium web apps, custom
        plugins, features, animations, and coding interactive layouts.
        <br />I also have full-stack developer experience with popular
        open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
        others) .
      </p>
      <p>Download Resume</p>
      </div>
      

      <div className="sphere">
      <span className="content"></span>
      </div>

    </div>
  );
}
