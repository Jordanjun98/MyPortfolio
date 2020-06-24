import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
//import imagePath from '../../../public/images'

export class Skills extends Component {
  render() {
    return (
   
        <div>

          <Fade bottom>
            <h1 id="skills">Skills</h1>
          </Fade>
          
            <div>
              {this.props.skill.map(skill => (   
                <Fade left>
                  { (skill.name === "Laravel" || skill.name === "Firebase" || skill.name === "React JS" )
                      ?  <img width="30%" key={skill.id} src={skill.imgUrl}></img> :
                      <img width="20%" key={skill.id} src={skill.imgUrl}></img>
                   }
                  <ul> { skill.name } </ul>
                </Fade>               
              ))}
            </div>  
          
          </div>

      
      
    )
  }
}

export default Skills
