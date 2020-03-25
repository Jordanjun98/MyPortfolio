import './../../App.css';
import React, { Component } from 'react'

export class About extends Component {

  
  render() {
    const first = "MARCH 2019 TO MAY 2019\nAssist the development team on CMS project for admin site using Laravel"

    const sec = "MARCH 2018 TO APRIL 2018\nAssist the operation team to create new car listing on CRM.\n";


    
    return (
      <div>
      
        
        <div className="projects"> 
          
          <h1 id="about">Working experience</h1>
           <div className="container-about">
              <h2> Back end developer (Intern) At The Techy Hub</h2>
              <p className="display-linebreak">
                {first} 
              </p>
             
           </div>
            
           <div className="container-about">
              <h2> INTERN AT ICAR ASIA</h2>
              <p className="display-linebreak">
                {sec} 
              </p>
           </div> 
            

        </div>
        
        
     
   
    </div>
    )
  }
}

export default About
