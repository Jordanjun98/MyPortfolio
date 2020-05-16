import React, { Component } from 'react'
import './../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
export class Profile extends Component {
  
  
    // window.location.replace('http://www.google.com')
  
  
  render() {
    const text = "I'm a fresh graduate in Computer Science\n\nThis website is fully done in react js framework.";
    return (
      <Zoom>
        <div id="profile" >      
        <img src="/images/me.jpeg" className="center"/>  
        <div >
          <h2>Jordan Jun</h2>
            <div className="display-linebreak"> 
                {text} 
                
            </div>
            
           
            <a href="/pdf/myresume.pdf">Resume</a>
                        

        </div>
        
         
      </div>

      </Zoom>
      
    )
  }
}

export default Profile
