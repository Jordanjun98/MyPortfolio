import './../../App.css';
import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
export class About extends Component {

  
  render() {
    const first = "MAY 2020 till currently\nParticipate in software testing environment with different testing method and tools."

    const sec = "MARCH 2019 TO MAY 2019\nAssist the development team on CMS project for admin site using Laravel"

    const third = "MARCH 2018 TO APRIL 2018\nAssist the operation team to create new car listing on CRM.\n";


    
    return (
      <div>
      
        <Zoom>
        <div> 
          
          <h1 id="about">Working experience</h1>

          <div className="container-about">
              <h2> QA engineer at Nettium</h2>
              <p className="display-linebreak">
                {first} 
              </p>
             
           </div>

          
           <div className="container-about">
              <h2> Back end developer (Intern) At The Techy Hub</h2>
              <p className="display-linebreak">
                {sec} 
              </p>
             
           </div>
            
           <div className="container-about">
              <h2> INTERN AT ICAR ASIA</h2>
              <p className="display-linebreak">
                {third} 
              </p>
           </div> 
        


        </div>
        

        </Zoom>
        
        
     
   
    </div>
    )
  }
}

export default About
