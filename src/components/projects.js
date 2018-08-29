import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <Card shadow={10} style={{minWidth: '450', margin: 'auto'}} >

          <a href="https://quote-app1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(quote-app.PNG) center / cover'}}></CardTitle>
        </a>
        <CardText style={{borderTop: '5px solid black', textAlign:'center', fontWeight:'bold', color:'black'}}>
          React JS, Axios
        </CardText>
        </Card>
      )
    }
    else if(this.state.activeTab === 1){
      return (
        <Card shadow={10} style={{minWidth: '450', margin: 'auto'}} >

          <a href="http://richscheuermanntesthostingpackage-com.stackstaging.com/content/7-mysql/" target="_blank" rel="noopener noreferrer">
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(journal-app.PNG) center / cover'}}></CardTitle>
        </a>
          <CardText style={{borderTop: '5px solid black', textAlign:'center', fontWeight:'bold', color:'black'}}>
            PHP, Bootstrap, jQuery, AJAX, MySQL
          </CardText>
        </Card>
    )
    }
    else if(this.state.activeTab === 2){
      return (
        <Card shadow={10} style={{minWidth: '450', margin: 'auto'}} >

          <a href="http://richscheuermanntesthostingpackage-com.stackstaging.com/content/5-bootstrap/app.html#" target="_blank" rel="noopener noreferrer">
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(landing-page.PNG) center / cover'}}></CardTitle>
        </a>
        <CardText style={{borderTop: '5px solid black', textAlign:'center', fontWeight:'bold', color:'black'}}>
          Bootstrap, jQuery
        </CardText>
        </Card>
    )
    }
    else if(this.state.activeTab === 3){

        return (
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}} >

            <a href="https://github.com/sureman138/MVC-App" target="_blank" rel="noopener noreferrer">
              <CardTitle style={{color: '#fff',height: '250px', background: 'url(mad-libs.PNG) center / cover'}}></CardTitle>
          </a>

          <CardText style={{borderTop: '5px solid black', textAlign:'center', fontWeight:'bold', color:'black'}}>
            C#, MVC, Microsoft SQL
          </CardText>
          </Card>
      )
    }


  }

  render(){
    return(

      <div className="category-tabs">
        <div className="title"><h1>Projects</h1></div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
          <Tab style={{fontWeight:'bold'}}>Quote Machine</Tab>
          <Tab style={{fontWeight:'bold'}}>Journal</Tab>
          <Tab style={{fontWeight:'bold'}}>Landing Page</Tab>
          <Tab style={{fontWeight:'bold'}}>Mad Libs</Tab>
        </Tabs>

        <section className="projects-section-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
