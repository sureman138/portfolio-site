import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';

class Contact extends Component{
  render(){
    return(

      <div id="contact">
      <div id="title">
      <h1>Contact</h1>
      </div>
      <div id="form-wrapper">
      <div className="description">
        <p>
          I'm a software developer looking to grow in all facets of the field while contributing to interesting projects.
          A native Clevelander and lover of all things NEO; what else is there to do but tinker with computers when you're buried under three feet of snow?
        </p>
        <p>
          Think I can help your team? Or just want to spam me for fun? Drop me a line and let's talk
        </p>
        </div>
        <div id="form">
        <ReactContactForm to="rscheue1@gmail.com" />
      </div>
      </div>
      </div>


    )
  }
}

export default Contact;
