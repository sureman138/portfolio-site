import React, { Component } from 'react';
import Personal from './personal';
import Professional from './professional';


class Projects extends Component{

  constructor(){
    super();
    this.state = {
      page: "personal"
    }

    this.handleSelect = this.handleSelect.bind(this)

  }

  handleSelect = (event) => {
    this.setState({page: event.target.name});
  }

  render(){

    return(
      <div>

        <div id="project-title" className="title"><h1>Projects</h1></div>
        <div id="project-select">
          <a className="project-group" onClick={this.handleSelect} name="personal">Personal</a> <a className="project-group" onClick={this.handleSelect} name="professional">Professional</a>
        </div>
        {this.state.page === "personal" && <Personal />}
        {this.state.page === "professional" && <Professional />}
      </div>
    )
  }
}

export default Projects;
