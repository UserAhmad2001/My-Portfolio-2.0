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
  function lettering(string) {
    var a = [];
    for (var i = 0; i < string.length; i++) {
      a.push(
        <span key={Math.random()} onMouseOver={anim}>
          {string[i]}
        </span>
      );
    }
    return a;
  }
  React.useEffect(() => {
    document.querySelector(".send-btn").addEventListener("click", (e) => {
      const options = {
        method: "POST",
        headers: {
          mode: "cors",
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "9cbb95a928msh2821046b9963db6p18054djsn98224f99e3f9",
          "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        },
        body:
          '{"personalizations":[{"to":[{"email":"Kingahmed19991@gmail.com"}],"subject":"Job Inquiry"}],"from":{"email":"' +
          document.querySelector('.email-field').innerHTML  +
          '"},"content":[{"type":"text/plain","value":"' +
          document.querySelector('.name-field').innerHTML  +
          " " +
          document.querySelector('.subject-field').innerHTML +
          " " +
          document.querySelector('.message-field').innerHTML  +
          '"}]}',
      };

      fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    });
  }, []);

  return (
    <div className="contact-section">
      <form onSubmit={() => false} className="form">
        <h1>
          {lettering("Contact")} <span> </span>
          {lettering("me!")}
        </h1>
        <p>
          If you have any questions or feedback, don't hesitate to drop me a
          message.
        </p>
        <input type="text" placeholder="Name" className="name-field" required />
        <input
          type="text"
          placeholder="Subject"
          className="subject-field"
          required
        />
        <input
          type="text"
          placeholder="E-mail"
          className="email-field"
          required
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Your Message..."
          className="message-field"
        ></textarea>
        <button className="send-btn">SEND</button>
      </form>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6681213.6276738!2d44.453172699999996!3d35.14885530000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1657226671197!5m2!1sar!2siq"
          width="600"
          height="747.4"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
