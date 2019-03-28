import React, { Component } from 'react';

class Personal extends Component{

  render(){

    return(
      <div>
        <div id="project-container">
          <a className="project" id="quote-link" href="https://quote-app-fdcd3.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="quote-image">
              <div className="overlay">
                <div className="text">
                  Quote Generator
                  <br/>
                  <ul>
                    <li>React JS</li>
                    <li>Axios</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="journal-link" href="https://journal-app1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="journal-image">
              <div className="overlay">
                <div className="text">
                  Journal App

                  <ul>
                    <li>PHP</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>AJAX</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="landing-link" href="https://landing-page-f280c.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="landing-image">
              <div className="overlay">
                <div className="text">
                  Landing Page

                  <ul>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="libs-link" href="https://github.com/sureman138/MVC-App" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="libs-image">
              <div className="overlay">
                <div className="text">
                  Mad Libs

                  <ul>
                    <li>C#</li>
                    <li>ASP.NET MVC</li>
                    <li>Microsoft SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>

        </div>
        </div>


    )


  }
}



export default Personal;
