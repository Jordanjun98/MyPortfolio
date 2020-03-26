import React, { Component } from 'react'

export class Project extends Component {  
  render() {


    return(
      <div  className="container-about">
        <h1 id="project">Projects Task</h1>
        {this.props.data.map(data => (
          
          <li key={data.id} >{  data.name  }</li>
         
        ))}

      </div>
    )
  }
}

export default Project
