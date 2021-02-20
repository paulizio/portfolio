import React from 'react'
import { Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../pictures/iconfinder_laptop_job_seeker_employee_unemployee_work_2620514.svg'

const About = () => {
  return (
    <Container fluid className='d-flex vh-100 justify-content-center align-items-center' id='about'>
      <h1 className='text-white font-weight-bold' style={{ fontSize: '9vh' }}>Pauli Nordman</h1>
      <h3 className='text-uppercase text-white font-weight-bold'>Welcome to my portfolio</h3>
      <div style={{
        height: '20vh',
        width: '40vh'
      }}
      >
        <Logo />
      </div>
    </Container>
  )
}

export default About
