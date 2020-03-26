import './App.css';
import Profile from './components/Profile'
import Navbar from './components/layout/Navbar'
import React, { Component } from 'react'
import About from './components/pages/About'
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
export class App extends Component {

  state={
    task: [
      { 
        id: 1,
        name : "Create testimony and category feature on admin site using CRUD for Zcova and SimeDarby CSR project"
      },
      {
        id: 2,
        name : "Pull data from admin site to client site for SimeDarby CSR project."
      },
      {
        id: 3,
        name : "Retrieve data via YouTube Data API, Twitter API and Google TrendAPI for NagaX project."
      },
      {
        id: 4,
        name: "Display those data on client site with Vue component with Vue.js"
      },
      {
        id: 5,
        name: "Change those static data to dynamic data with Laravel query builder"
      },
      {
        id: 6,
        name : "Augmented reality for ordering furniture application with ARKit framework by switf 5 language in ios development. "
      }     
    ]
  }

  skills={
    lang: [
      {
        id: 1,
        name: "PHP",
        img: ""
      },
      {
        id: 2,
        name: "Java"
      },
      {
        id: 3,
        name: "Vue JS"
      },
      {
        id: 4,
        name: "Firebase"
      },
      {
        id: 5,
        name: "Switf 5"
      },
      {
        id: 6,
        name: "React JS"
      },
    ]
  }


  render() {
    return (
      <div className="container">

        {/* <div>   
          <Navbar />
          <Route exact path="/" render = {props => (
            <Profile />

            )}/>    
        <Route path="/about" component={About}  data={this.data.task} />  
        </div>
        <hr /> */}    
        <Navbar />
        <hr />
        <Profile />
        <hr />
        <About />
        <hr />
        <Education />
        <hr />
        <Project data={this.state.task} />
        <hr />
        <Skills skill={this.skills.lang}/>
        <hr />
        <Contact />
        
        
    

     
      </div>  
    )
  }
}

export default App

