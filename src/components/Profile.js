import React, { Component } from 'react'
import './../App.css';
export class Profile extends Component {
  
  
  
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
        </div>
        
         
      </div>
    )
  }
}

export default Profile
