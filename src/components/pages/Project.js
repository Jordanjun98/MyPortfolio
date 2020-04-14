import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
export class Project extends Component {  
  render() {
    return(
      <Zoom>
        <div>
        <h1 id="project">Projects Task</h1>
        
          {this.props.data.map(data => (
            
            <li key={data.id} >{  data.name  }</li>

          ))}
        
      </div>

      </Zoom>
      
    )
  }
}

export default Project
