import "./members.css";
const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">
        <code> Projects</code>
      </h1>
      <div className="member member-1">
        <div className="member-img-1"></div>
        <div className="member-info">
          <h1 className="name">
            <code>Landing Page</code>
          </h1>
          <h3 className="position">HTML CSS Bootstrap</h3>
          <h4 className="about">
            <code>
              My First Project Landing Page, Iam created this using
              HTML,CSS,Bootstrap 5
            </code>
          </h4>
          {/* <a href="#contact" className="contact-member">
            <span>contact</span>
          </a> */}
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img-2"></div>
        <div className="member-info">
          <h1 className="name">
            <code>CRUD</code>
          </h1>
          <h3 className="position">
            <code>Codeigniter</code>
          </h3>
          <h4 className="about">
            <code>My First CRUD project , using codeigniter</code>
          </h4>
          {/* <a href="#contact" className="contact-member">
            <span>contact</span>
          </a> */}
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img-3"></div>
        <div className="member-info">
          <h1 className="name">
            <code>Uni Chat</code>
          </h1>
          <h3 className="position">
            <code>React Js</code>
          </h3>
          <h4 className="about">
            <code>
              Uni Chat is realtime chat application and multi user , using React
              Js, Socket io and Express
            </code>
          </h4>
          {/* <a href="#contact" className="contact-member">
            <span>contact</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Members;
