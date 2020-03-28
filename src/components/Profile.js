import React, { Component } from 'react'
import './../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
export class Profile extends Component {
  
  
    // window.location.replace('http://www.google.com')
  
  
  render() {
    const text = "I'm a final year student which just finish degree studies in Computer Science\n\nThis website is fully done in react js framework.";
    return (
      <div id="profile" className="container-about">      
        <img src="/images/me.jpeg" className="center"/>  
        <div >
          <h2>Jordan Jun</h2>
            <div className="display-linebreak"> 
                {text} 
                
            </div>
            
           
            <a href="/pdf/myresume.pdf">Resume</a>
             
              

        </div>
        
         
      </div>
    )
  }
}

export default Profile
