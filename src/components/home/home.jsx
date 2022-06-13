import "./home.css";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>
          <code>scroll down</code>
        </h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>
          <code>About Me</code>
        </span>
        <br />
        <p>
          <code>
            Currently Iam a student, and still learning about web developer
          </code>
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
