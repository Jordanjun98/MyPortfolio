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
        name : "Create testimony and category feature on admin site using CRUD for Zcova and SimeDarby CSR project",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1587190179-fe668e416ca995625755442eb429f7ae?w=600"
      },
      {
        id: 2,
        name : "Pull data from admin site to client site for SimeDarby CSR project.",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1587190270-bb41b564b61d674a85b91fbceb504a49?w=600"
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
        name : "Augmented reality for ordering furniture application with ARKit framework by switf 5 language in ios development. ",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1587190314-b02fff4b8466e727d22b76ae53dc8f64?w=600"
      }     
    ]
  }

  skills={
    lang: [
      {
        id: 1,
        name: "Laravel",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1589642784-a771a5984a86606d27a95dec4f5dfdf7?w=600"
      },
      {
        id: 2,
        name: "Java",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1589642835-351f6e549ed89d6bd1d39e086fc2c9eb?w=600"
      },
      {
        id: 3,
        name: "Vue JS",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586845363-1f21abe8d5cc3079fca1af4e37068d41?w=600"
      },
      {
        id: 4,
        name: "Firebase",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586856184-66370a30f213d7a38f31f1f0d6e0fb7b?w=600"
      },
      {
        id: 5,
        name: "Switf 5",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1589643021-9a1be86d0886a22fc634a7ebb05f94b4"
      },
      {
        id: 6,
        name: "React JS",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1589643075-477e0d61830952943929a30d527bb9d0?w=600"
      },
    ]
  }

    

  render() {
    // storage.ref()
    // console.log(storage)
    return (

     
      <div>

        <Navbar/>

        <br />
        <div>
            <Profile />
        </div>
        
        <br />
        <div  >
          <About />
        </div>
        
        <br />
        <div >
            <Education />
        </div>
        
        <br />
        {/* <Portfolio /> */}
        <Project data={this.state.task} />
        <br />
        <Skills skill={this.skills.lang}/>
        <br />
        <Contact />

      </div>  
    )
  }
}

export default App

