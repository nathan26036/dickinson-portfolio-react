import calendar from '../assets/images/calendar_project.png'
import note from '../assets/images/note_app.png'
import schedule from '../assets/images/Schedule-screen.png'
import quiz from '../assets/images/starting-screen.png'
import weather from '../assets/images/weather-dash.png'
import text from '../assets/images/jate_screenshot.png'
import planorama from '../assets/images/planorama-screenshot'

export default function Portfolio() {
  return (
    <div className="d-flex flex-wrap p-4 gap-5 justify-content-center container">
<div className="card p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10 text-center" aria-hidden="true">
  <img src={calendar} className="card-img-top" alt="Calendar app"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      CalPro
    </h5>
    <p className="card-text placeholder-glow">
      A calendar app that can have events added and saved per user.
    </p>
    <a href="https://github.com/JDeSan/CalPro" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://cal-pro-da5d4fc988bc.herokuapp.com/login" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div>
<div className="card p-2 col-lg-3 col-sm-10 col-xs-10 text-center" aria-hidden="true">
  <img src={text} className="card-img-top" alt="text editor app"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      J.A.T.E 
    </h5>
    <p className="card-text placeholder-glow">
    Just another text editor.
    </p>
    <a href="https://github.com/nathan26036/text-editor" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://text-editor-qmgk.onrender.com" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div><div className="card p-2 col-lg-3 col-sm-10 col-xs-10 text-center" aria-hidden="true">
  <img src={quiz} className="card-img-top" alt="quiz app"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      Coding Quiz
    </h5>
    <p className="card-text placeholder-glow">
      A coding challenge to test the users knowledge.
    </p>
    <a href="https://github.com/nathan26036/code-quiz" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://nathan26036.github.io/code-quiz/" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div><div className="card p-2 col-lg-3 col-sm-10 col-xs-10 text-center" aria-hidden="true">
  <img src={weather} className="card-img-top" alt="weather app"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      Weather App
    </h5>
    <p className="card-text placeholder-glow">
      A classic weather app that will gather weather from any city inputted.
    </p>
    <a href="https://github.com/nathan26036/weather-dashboard" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://nathan26036.github.io/weather-dashboard/" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div><div className="card p-2 col-lg-3 col-sm-10 col-xs-10 text-center" aria-hidden="true">
  <img src={schedule} className="card-img-top" alt="work day schedular"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
    Work Day Schedular
    </h5>
    <p className="card-text placeholder-glow">
    A 9-5 work day schedular to help organize thoughts thoughout the day.
    </p>
    <a href="https://github.com/nathan26036/work-day-scheduler" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://nathan26036.github.io/work-day-scheduler/" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div>
<div className="card p-2 col-lg-3 col-sm-10 col-xs-10 text-center" aria-hidden="true">
  <img src={note} className="card-img-top" alt="Notes app"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      Notes App
    </h5>
    <p className="card-text placeholder-glow">
      A standard notes app where the users add and delete notes.
    </p>
    <a href="https://github.com/nathan26036/note-app" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://frozen-wave-03507-b9886967daa0.herokuapp.com/" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div>
<div className="card p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10 text-center" aria-hidden="true">
  <img src={planorama} className="card-img-top" alt="planorama app"></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      Planorama
    </h5>
    <p className="card-text placeholder-glow">
      An event planner for companies to plan events.
    </p>
    <a href="https://github.com/nathan26036/Planorama" class="card-link btn btn-primary">GitHub link</a>
    <a href="https://planorama.onrender.com" class="card-link btn btn-primary">Deployed link</a>
  </div>
</div>
    </div>
  );
}
