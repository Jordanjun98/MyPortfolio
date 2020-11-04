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
        imgUrl: "https://img.vim-cn.com/15/968cac795c66e759465ccebd9e6444b85f6d3b.png"
      },
      {
        id: 2,
        name: "Java",
        imgUrl: "https://img.vim-cn.com/2c/029916593bf291edc536870692a817775d20c5.png"
      },
      {
        id: 3,
        name: "Vue JS",
        imgUrl: "https://img.vim-cn.com/55/5257b8c5e7ecf34ce4f9b952eeaf006adfa339.png"
      },
      {
        id: 4,
        name: "Firebase",
        imgUrl: "https://img.vim-cn.com/47/35edb5d1eebc437e7e371c53af4d6137993ab6.png"
      },
      {
        id: 5,
        name: "Switf 5",
        imgUrl: "https://img.vim-cn.com/b4/9a7a48158a4ff8f6278f9c5667c35e122f7f3c.png"
      },
      {
        id: 6,
        name: "React JS",
        imgUrl: "https://img.vim-cn.com/b9/4fcff523f85f0a78d0d3fc1620d4b00aab92f2.png"
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

