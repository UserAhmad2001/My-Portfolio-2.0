import React from "react";

export default function Contact() {

    
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
    <div className="contact-section">
      <div className="form">
        <h1>
            {lettering('Contact')} <span> </span>
            {lettering('me!')}
        </h1>
        <p>If you have any questions or feedback, don't hesitate to drop me a message.</p>
        <input type="text" placeholder="Name" className="name-field" />
        <input type="text" placeholder="Subject" className="sunject-field" />
        <input type="text" placeholder="E-mail" className="email-field" />
        <textarea
          cols="30"
          rows="5"
          placeholder="Your Message..."
          className="message-field"
        ></textarea>
        <button className="send-btn">SEND</button>
      </div>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6681213.6276738!2d44.453172699999996!3d35.14885530000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1657226671197!5m2!1sar!2siq"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
