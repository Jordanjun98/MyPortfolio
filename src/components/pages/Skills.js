import React, { Component } from 'react'

export class Skills extends Component {
  render() {
    return (
      <div>

        <h1 id="skills">Skills</h1>
        <div className="flex-project-container">
           <div> <img src="/images/php.png" width="150" height="120" /></div> 
           <div> <img src="/images/java.jpg" width="150" height="120" /> </div> 
           <div><img src="/images/vue.png" width="150" height="120" />  </div> 
           <div> <img src="/images/firebase.png" width="150" height="120"/> </div> 
           <div> <img src="/images/swift5.png" width="150" height="120"/> </div>
           <div> <img src="/images/react.png" width="150" height="120"/> </div>
      </div>
          {this.props.skill.map(skill => (         
                <ul key={skill.id}>{  skill.name  }</ul>   
                      
          ))}

        {/* <section id="skillheader" className="flex-project-container">

          <div><img src={pyimg} width="100" height="100" alt="python"/></div>
          <div><img src={jsimg} width="100" height="100" alt="js"/></div>
          <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
          <div><img src={cssimg} width="100" height="100" alt="css"/></div>
          <div><img src={wordpressimg} width="100" height="100" alt="wordpress"/></div>
          <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
          <div><img src={databasebimg} width="100" height="100" alt="db"/></div>

        </section> */}
      </div>
    )
  }
}

export default Skills
