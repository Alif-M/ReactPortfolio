import "./footer.css";
import { BsMouse } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { TiSocialDribbble } from "react-icons/ti";
// import { TiSocialYoutube } from "react-icons/ti";
// import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        <code>That's all</code>
        <a href="#home">
          <h2>
            <BsMouse />
            <br />
            <code>- scroll up -</code>
          </h2>
        </a>
      </h1>
      {/* <div className="social-links">
        <a href="#">
          <BsInstagram className="social" />
        </a>
        <a href="#">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          {" "}
          <TiSocialDribbble className="social" />
        </a>

        <a href="#">
          <TiSocialYoutube className="social" />
        </a>

        <a href="#">
          <TiSocialGithub className="social" />
        </a>
      </div> */}
    </div>
  );
}
export default Footer;
