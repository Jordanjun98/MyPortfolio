import React, { Component } from 'react'

export class Project extends Component {  
  render() {

    // this.props.data.map((data) => (

    //   console.log(data)
    //  ));

    // return this.props.data.map((task) =>(
    //   console.log(task)
    // ));


    return(
      <div  className="container-about">
        <h1 id="project">Projects</h1>
        {this.props.data.map(data => (
          
          <li key={data.id} >{  data.name  }</li>
         
        ))}

      </div>
    )
  }
}

export default Project
