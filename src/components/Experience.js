import React from 'react'
import { Container } from 'react-bootstrap'
import heeroslogo from '../pictures/heeroslogo.png'
const Experience = () => {
  return (
    <Container fluid className='d-flex vh-100 justify-content-center align-items-center' id='experience'>
      <h1 className='text-white' style={{ fontSize: '8vh', paddingBottom: '3vh' }}>Work experience</h1>
      <a href='https://www.heeros.com' target='_blank' rel='noreferrer'>
        <div style={{ height: '25vh', width: '75vh' }}>
          <div class='hovereffect'>
            <img className='img-responsive' src={heeroslogo} alt='' />
            <div className='overlay'>
              <div className='squareJob'>
                <p className='jobTitle'>Full Stack Developer</p>
                <p className='jobInfo'>9/2020 - current</p>
                <p className='jobInfo'>Helsinki, Finland</p>
                <p className='jobInfo'>Frontend development with ReactJS | Backend development with NodeJS | AWS ecosystem | ElasticSearch | Unit testing</p>
              </div>
            </div>
          </div>
        </div>
      </a>

    </Container>
  )
}

export default Experience
