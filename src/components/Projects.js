import React from 'react'
import { Container, Card, CardDeck, Row, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaGithub, FaGooglePlay } from 'react-icons/fa'
import kauppisIcon from '../pictures/kauppisIcon.png'
import plantlife from '../pictures/plantlife.png'
import starwarsplanets from '../pictures/starwarsplanets.png'
const Projects = () => {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center' id='projects'>
      <h1>Projects</h1>
      <CardDeck card-img-top>
        <Card>
          <Card.Img variant='top' src={starwarsplanets} />
          <Card.Body>
            <Card.Title>Star Wars planets</Card.Title>
            <Card.Text>
              Small ReactJS project which fetches Star Wars planets from <a href='https://swapi.dev/' target='_blank' rel='noreferrer'>swapi.dev</a>:

              <ul style={{ marginTop: '3vh' }}>
                <li>Displays the planets in web browser using the react app.</li>
                <li>Only shows planets that have at least one resident.</li>
                <li>Sorts the planets from lowest diameter to highest.</li>
                <li>Displays names of the associated residents.</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className='align-items-center justify-content-center text-center'>
              <Col>
                <a href='https://github.com/paulizio/starwarsplanets' target='_blank' rel='noreferrer'><FaGithub size={40} /></a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={plantlife} />
          <Card.Body>
            <Card.Title>PlantLife</Card.Title>
            <Card.Text>
              Plant app to keep track of plants. Add name,height,width and picture of plant. Measure brightness using phones internal sensor.
              <ul style={{ marginTop: '3vh' }}>
                <li>App written with Kotlin</li>
                <li>Uses SQLite with Room for database</li>
                <li>Utilizes native Camera API and light sensor</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className='align-items-center justify-content-center text-center'>
              <Col className='auto'>
                <a href='https://github.com/paulizio/PlantLife' target='_blank' rel='noreferrer'><AiFillGithub size={40} /></a>
              </Col>
              <Col className='auto'>
                <a href='https://play.google.com/store/apps/details?id=com.paulizio.plantlife' target='_blank' rel='noreferrer'><FaGooglePlay size={40} /></a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={kauppisIcon} />
          <Card.Body>
            <Card.Title>Kauppikseen</Card.Title>
            <Card.Text>
              Android application which lets business school applicants prepare for entrance examinations by doing old exams.
              <ul style={{ marginTop: '3vh' }}>
                <li>Application done with React Native</li>
                <li>Backend NodeJS and database MongoDB</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className='align-items-center justify-content-center text-center'>
              <Col>
                <a href='https://play.google.com/store/apps/details?id=com.paulizio.kauppikseen' target='_blank' rel='noreferrer'><FaGooglePlay size={40} /></a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default Projects
