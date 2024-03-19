import myResume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div className="row justify-content-center p-4">
      <h1 className="text-center col-3 pb-3 mb-4 border-bottom border-primary-subtle border-2">Resume</h1>
      <a href={myResume} className="text-center" download>
      <i className="fs-1 fa-solid fa-download pb-3 text-primary-emphasis"></i>
      </a>
      <p className="text-center fs-5">
      Feel free to download my resume above!
      </p>
      <section className="d-flex flex-wrap gap-5 justify-content-center text-center">
        <div className="card col-3 bg-secondary">
          <h4 className="card-title">Font-End Tech</h4>
          <p className="card-text">
            <ul>
              <li className="logo list-group-item">
              <i class="fa-solid fa-code text-primary-emphasis"></i>
              </li>
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">APIs</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">GIT</li>
            </ul>
          </p>
        </div>

        <div className="card col-3 bg-secondary">
          <h4 className="card-title">Back-End Tech</h4>
          <p className="card-text\">
            <ul>
              <li className="logo list-group-item">
              <i class="fa-solid fa-terminal text-primary-emphasis"></i>
              </li>
              <li className="list-group-item">Node.Js</li>
              <li className="list-group-item">Jest</li>
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">MySQL</li>
              <li className="list-group-item">Sequelize</li>
              <li className="list-group-item">Object-Relational Mapping(ORM)</li>
              <li className="list-group-item">Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>
        <div className="card col-3 bg-secondary">
          <h4 className="card-title">Performance Tech</h4>
          <p className="card-text">
            <ul>
              <li className="logo list-group-item">
              <i class="fa-solid fa-code-branch text-primary-emphasis"></i>
              </li>
              <li className="list-group-item">NoSQL</li>
              <li className="list-group-item">Progressive Web Applications (PWA)</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Mongoose</li>
              <li className="list-group-item">GraphQL</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">MERN</li>
              <li className="list-group-item">State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}
