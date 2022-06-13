import "./contact.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://web.facebook.com/muhammad.a.maulana.3994885"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
            <code>Facebook</code>
            <span>
              <code>Alif Maulana</code>
            </span>
          </h2>
        </a>

        <a
          href="https://wa.link/v7ipye"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            <code>whatsapp</code>
            <span>
              <code>087 853 463 214</code>
            </span>
          </h2>
        </a>

        <a
          href="https://github.com/Alif-M"
          className="contact instagram"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            <code>Github</code>
            <span>
              <code>Alif Maulana</code>
            </span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
