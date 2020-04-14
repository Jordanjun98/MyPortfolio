import { stack	as Menu } from 'react-burger-menu'
import React, { Component } from 'react'

export class Navbar extends Component {


  // showSettings (event) {
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        
        

      <Menu>
          <a id="#profile"  href="#profile" className="menu-item" to="/">Home</a> 
          <a id="#about"   href="#about" className="menu-item" to="/about">About</a> 
          <a id="#education" className="menu-item" href="#education">Education</a> 
          {/* <a id="#portfolio"  className="menu-item" href="#portfolio">Portfolio</a>  */}
          {/* <a id="#project"  className="menu-item" href="#project">Project</a>  */}
          <a id="#skills" className="menu-item" href="#skills">Skills</a> 
          <a id="#contact" className="menu-item" href="#contact">Contact</a> 
          <a className="menu-item" target="_blank" href="https://github.com/Jordanjun98/MyPortfolio">GitHub repo</a>
        </Menu>


        



      </div>
    )
  }
}

export default Navbar



const headerStyle={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration : 'none'
}
