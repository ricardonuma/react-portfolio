import React from "react";
import "./App.css";

const ContactEmail = {
  id: 0,
  url: "https://linkedin.com/in/ricardo-numa-16ab581b/",
  image: "images/mail.png",
  text: "koki_numa@hotmail.com",
};
const ContactLinkedin = {
  id: 1,
  url: "https://linkedin.com/in/ricardo-numa-16ab581b/",
  image: "images/linkedin.png",
  text: "https://linkedin.com/in/ricardo-numa-16ab581b/",
};
const ContactGithub = {
  id: 2,
  url: "https://github.com/ricardonuma?tab=repositories",
  image: "images/github.png",
  text: "https://github.com/ricardonuma",
};
const Contacts = [ContactEmail, ContactLinkedin, ContactGithub];

const Contact = () => {
  return (
    <div id="contact">
      <hr />

      <div className="bg-contact">
        <h2 className="title">CONTACT</h2>

        <hr />

        <div className="margin-left-right">
          <table className="contact-table">
            {Contacts.map((contact) => (
              <tr>
                <td>
                  <a href={contact.url} target="#">
                    <images
                      src={contact.image}
                      alt={contact.text}
                      className="contact-image"
                    />
                  </a>
                </td>
                <td className="contact-td">
                  <span className="contact-text">{contact.text}</span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
