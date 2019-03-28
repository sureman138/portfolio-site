import React, { Component } from 'react';

class Professional extends Component{

  render(){

    return(
      <div>
        <div id="project-container">
          <a className="project" id="quote-link" href="https://noblewindowfilm.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="noble-image">
              <div className="overlay">
                <div className="text">
                  Noble Window Films
                  <br/>
                  <ul>
                    <li>PHP</li>
                    <li>WordPress</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="libs-link" href="https://www.concordiaacademywichita.org/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="concordia-image">
              <div className="overlay">
                <div className="text">
                  Concordia Academy
                  <br/>
                  <ul>
                    <li>SquareSpace</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="journal-link" href="https://kristindfit.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="fitness-image">
              <div className="overlay">
                <div className="text">
                  KristinDFitness
                  <br/>
                  <ul>
                    <li>PHP</li>
                    <li>WordPress</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="landing-link" href="https://www.fortlauderdalebehavioral.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="ft-laud-image">
              <div className="overlay">
                <div className="text">
                  Fort Lauderdale Behavioral Wellness
                  <br/>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
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



export default Professional;
