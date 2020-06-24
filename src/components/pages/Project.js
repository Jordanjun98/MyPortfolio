import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
export class Project extends Component {  
  render() {
    return(
      <Zoom>
        <div>
        <h1 id="project">Past experience</h1>
        
        <div>
          {this.props.data.map(data => (
            <Fade>
              {/* <img width="80%" height="500px" src={ data.imgUrl }></img>   */}
              <li key={data.id} > {  data.name  } </li>
              
            </Fade>       
           
          ))}
          
        </div>  
        


              
        
      </div>

      </Zoom>
      
    )
  }
}

export default Project
