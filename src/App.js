import './App.css';
import Profile from './components/Profile'
import Navbar from './components/layout/Navbar'
import React, { Component } from 'react'
import About from './components/pages/About'
// import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
import Portfolio from './components/pages/Portfolio'
// import imagePath from '../../../public/images'

// import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(myConfiguredSanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }



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
        name: "Laravel",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586845996-376a8995524b5fce9a5a18cc497846b3?w=600"
      },
      {
        id: 2,
        name: "Java",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586846058-57c9f4c51fb1015d5403052289c1753b?w=600"
      },
      {
        id: 3,
        name: "Vue JS",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586845363-1f21abe8d5cc3079fca1af4e37068d41?w=600"
      },
      {
        id: 4,
        name: "Firebase",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586845755-be0ef8f00932a2fa1cd63baa21b2a2e0?w=600"
      },
      {
        id: 5,
        name: "Switf 5",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586845826-7026bb41109409001f682af43b109cdb?w=600"
      },
      {
        id: 6,
        name: "React JS",
        imgUrl: "https://sandbox-uploads.imgix.net/u/1586846136-3cee6252e632da6a7d9ad98df6170479?w=600"
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
        {/* <Project data={this.state.task} /> */}
      
        <Skills skill={this.skills.lang}/>
        <br />
        <Contact />
        
     
      </div>  
    )
  }
}

export default App

