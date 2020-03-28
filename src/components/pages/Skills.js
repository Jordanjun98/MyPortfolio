import React, { Component } from 'react'
// import images from '../../../public/images'
export class Skills extends Component {
  render() {
    return (
      <div  className="container-about">


        <h1 id="skills">Skills</h1>
        <div className="flex-project-container">
          
            <div> <img src="/images/php.png" width="150" height="120" /></div> 
            <div> <img src="/images/java.jpg" width="150" height="120" /> </div> 
            <div> <img src="/images/vue.png" width="150" height="120" />  </div> 
            <div> <img src="/images/firebase.png" width="150" height="120"/> </div> 
            <div> <img src="/images/swift5.png" width="150" height="120"/> </div>
            <div> <img src="/images/react.png" width="150" height="120"/> </div>
         
        </div>

        {this.props.skill.map(skill => (         
            <ul key={skill.id}>{  skill.name  }</ul>  
        ))}
         
      </div>
    )
  }
}

export default Skills
