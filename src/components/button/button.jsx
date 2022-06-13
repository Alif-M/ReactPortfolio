import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        <code>Learn more</code>
      </a>
      <a href="#contact" className="btn sec">
        <code>Get in Touch</code>
      </a>
    </div>
  );
}

export default Buttons;
