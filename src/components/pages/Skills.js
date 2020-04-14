import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
//import imagePath from '../../../public/images'

export class Skills extends Component {
  render() {
    return (
   
        <div  className="container-about">

          <Fade bottom>
            <h1 id="skills">Skills</h1>
          </Fade>
          
{/*           
          <div className="flex-project-container">
            
            <div> <img src="/images/php.png" width="150" height="120" /></div> 
            <div> <img src="/images/java.jpg" width="150" height="120" /> </div> 
            <div> <img src="/images/vue.png" width="150" height="120" />  </div> 
            <div> <img src="/images/firebase.png" width="150" height="120"/> </div> 
            <div> <img src="/images/swift5.png" width="150" height="120"/> </div>
            <div> <img src="/images/react.png" width="150" height="120"/> </div>
        
          </div> */}

    

          
          
              {this.props.skill.map(skill => (   
                <Fade left>
                {/* <img scr={ skill.imgUrl }></img> */}
                  <img key={skill.id} src={skill.imgUrl}></img>  
                  <ul> { skill.name } </ul>
                </Fade>               
              ))}


            {/* <a href={this.props.skill}>
                <img src={this.props.skill.imageUrl} alt={this.props.skill.name}></img>
            </a> */}
          
          </div>

      
      
    )
  }
}

export default Skills
