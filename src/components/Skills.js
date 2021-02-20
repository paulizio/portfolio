import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SiReact, SiNodeDotJs, SiMongodb, SiKotlin, SiJavascript, SiRedux } from 'react-icons/si'
import { FaAws, FaGraduationCap } from 'react-icons/fa'

const Skills = () => {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center' id='skills'>
      <Row className='align-items-center justify-content-center text-center my-4'>
        <h1>Background</h1>
      </Row>
      <Row className='align-items-center justify-content-center text-center my-1'>
        <Col>
          <FaGraduationCap size={50} /> <h4>2018-2020</h4>
          <ul className='listStyleNone'>
            <li><h4>M.Sc. in Economics and Business Administration</h4></li>
            <li><h4>Hanken School of Economics</h4></li>
          </ul>
        </Col>
      </Row>
      <Row className='align-items-center justify-content-center text-center my-3'>
        <h1>Skills</h1>
      </Row>
      <Row className='align-items-center justify-content-center text-center my-2'>
        <Col>
          <SiReact size={50} /><h4>React</h4>
        </Col>
        <Col>
          <SiNodeDotJs size={50} /> <h4>Nodejs</h4>
        </Col>
        <Col>
          <SiRedux size={50} /> <h4>Redux</h4>
        </Col>
        <Col>
          <SiMongodb size={50} /> <h4>MongoDB</h4>
        </Col>
        <Col>
          <SiKotlin size={50} /> <h4>Kotlin</h4>
        </Col>
        <Col>
          <FaAws size={50} /> <h4>AWS</h4>
        </Col>
        <Col>
          <SiJavascript size={50} /> <h4>JavaScript</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
