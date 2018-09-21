import React, { Component } from 'react';

class Professional extends Component{

  render(){

    return(
      <div>
        <div id="project-container">
          <a className="project" id="quote-link" href="https://www.pilgrimalive.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-image" id="pilgrim-image">
              <div className="overlay">
                <div className="text">
                  Pilgrim Alive
                  <br/>
                  <ul>
                    <li>Wix</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a className="project" id="journal-link" href="https://www.concordiaacademywichita.org/" target="_blank" rel="noopener noreferrer">
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
        </div>
      </div>

    )


  }
}



export default Professional;
