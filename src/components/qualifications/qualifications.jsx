import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">
        <code>My Skills :</code>
      </span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>
            <code>html</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>
            <code>css</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>
            <code>javascript</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>
            <code>bootstrap</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>
            <code>React</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content php"></div>
          <h1>
            <code>php</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content ci"></div>
          <h1>
            <code>codeigniter</code>
          </h1>
        </div>
        <div className="qualification">
          <div className="content laravel"></div>
          <h1>
            <code>laravel</code>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
