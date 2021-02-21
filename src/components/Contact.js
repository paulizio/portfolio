import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
const Contact = () => {
  return (
    <Container fluid className='d-flex vh-50 justify-content-center align-items-center' id='contact'>
      <Row className='align-items-center justify-content-center text-center my-5'>
        <h1 style={{ color: 'white' }}>Get in touch with me</h1>
      </Row>
      <Row className='align-items-center justify-content-center text-center my-5'>
        <Col className='align-items-center justify-content-center text-center my-5'>
          <a href='https://www.linkedin.com/in/pauli-nordman/' target='_blank' rel='noreferrer'><AiFillLinkedin size={80} color='white' id='icon-hov' /></a>
        </Col>
        <Col className='align-items-center justify-content-center text-center my-5'>
          <a href='https://www.github.com/paulizio' target='_blank' rel='noreferrer'><AiFillGithub size={80} color='white' id='icon-hov' /></a>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
