import React from "react";

export default function () {
  function load() {
    const l = document.querySelector(".loading");
    document.querySelector(".root").childNodes.forEach((child) => {
      if (child !== document.querySelector(".background-section")) {
        child.style.display = "none";
      }
    });
    l.style.display = "flex";
    l.style.transform = "translateX(100%)";
    const timeout2 = setTimeout(() => {
      l.style.display = "none";
      l.style.transform = "translateX(-100%)";
      clearTimeout(timeout2);
    }, 2000);
  }

  function navClick(e) {
    load();
    const el = e.target.innerHTML.toLowerCase();
    switch (el) {
      case "home":
        document.querySelector(".home-section").style.display = "block";
        break;

      case "skills":
        document.querySelector(".skills-section").style.display = "flex";
        break;

      case "works":
        document.querySelector(".works-section").style.display = "grid";
        break;

      case "about":
        document.querySelector(".about-section").style.display = "block";
        break;

      case "contact":
        document.querySelector(".contact-section").style.display = "flex";
        break;
    }
  }

  return (
    <div className="background-section">
      <nav className="navbar">
        <div className="home-logo">
          <img className="logo" src='../assets/dark_logo.svg' alt="my logo" />
          <h1>
            Ahmad <br /> <p>web developer</p>
          </h1>
        </div>

        <div className="nav-sections">
          <span onClick={navClick}>HOME</span>
          <span onClick={navClick}>SKILLS</span>
          <span onClick={navClick}>WORKS</span>
          <span onClick={navClick}>ABOUT</span>
          <span onClick={navClick}>CONTACT</span>
        </div>

        <div className="social">
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-discord"></i>
        </div>
      </nav>

      <div className="loading">
        <img src="" alt="" />
        <p>Loading....</p>
      </div>
    </div>
  );
}
