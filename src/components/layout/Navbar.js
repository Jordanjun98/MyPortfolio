import React from 'react'

export default function Navbar() {
  return (
   
    <header style={headerStyle} >   
      <a href="#profile" style={linkStyle} to="/">Home</a> | 
      <a href="#about" style={linkStyle} to="/about">About</a> |
      <a style={linkStyle} href="#education">Education</a> |
      <a style={linkStyle} href="#project">Project</a> |
      <a style={linkStyle} href="#skills">Skills</a> |
      <a style={linkStyle} href="#contact">Contact</a> |
      
    </header>

      // <nav className="navbar">
      //   <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
      //   <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
      //   <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Skills</a>
      //   <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Projects</a> 
      //   <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>
      // </nav>
    
  )
}


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
