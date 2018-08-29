import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Index extends Component{
  render(){
    return(
      <div style={{width:'100%', margin:'auto'}}>
        <Grid className="index-grid">
          <Cell col={12}>
            <img
              src="http://icons-for-free.com/free-icons/png/512/628288.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>C# | ASP.NET MVC | SQL | PHP | JavaScript | HTML/CSS | React | Bootstrap</p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/rich-scheuermann-90b36747/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*GitHub*/}
                <a href="https://github.com/sureman138" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*FreeCodeCamp*/}
                <a href="https://www.freecodecamp.org/rscheue1" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Index;
