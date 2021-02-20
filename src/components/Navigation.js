import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navigation = () => {
  return (
    <Navbar expand='lg' fixed='top'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#skills'>Skills</Nav.Link>
          <Nav.Link href='#experience'>Experience</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/pauli-nordman/' target='_blank'><AiFillLinkedin size={30} /></Nav.Link>
          <Nav.Link href='https://www.github.com/paulizio' target='_blank'><AiFillGithub size={30} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
