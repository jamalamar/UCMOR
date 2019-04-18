import React, { Component } from 'react';
import './App.css';

import NavBar from './Components/navbar.js'
import ControlledCarousel from './Components/carousel.js'
import Footer from './Components/footer.js'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <img className="Logo" src='http://ucmor.edu.mx/portal%20Archivos/ccf397_90318c8a081b4f0fbe3a441539e85b6a.jpg'/>
          <h1>Universidad de la Cuenca de Morelos</h1>
        </div>
        <NavBar/>

        <div className="Carousel">
          <ControlledCarousel/>
        </div>

        <div className="Card-Container">
          <h2 className="Oferta">Nuestros Programas</h2>


          <div className="Card-Content">
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_bc158c842fe04727a07b55e3bfc1b9b7.jpg" thumbnail />
                  <h4 className="Card-Title">Pre-Escolar</h4>
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_ae0653643b714eafa43ebe0d99d99c4a.jpg" thumbnail />
                  <h4 className="Card-Title">Primaria</h4>
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_40f606af0c484f52a9a87ccfc42a3b97.jpg" thumbnail />
                  <h4 className="Card-Title">Secundaria</h4>
                  </a>
                </Col>
              </Row>

              <Row>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_40f606af0c484f52a9a87ccfc42a3b97.jpg" thumbnail />
                  <h4 className="Card-Title">Preparatoria</h4>
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_3ec3f5fafb93420fa408975b803e0fc7.jpg" thumbnail />
                  <h4 className="Card-Title">Técnicos Profesional</h4>
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_d625a27050b348e2ad00e300fcbace25mv2.jpg" thumbnail />
                  <h4 className="Card-Title">Licenciaturas</h4>
                  </a>
                </Col>
              </Row>
              
              <Row>
                <Col xs={6} md={4}>
                  <a href="#">
                  <Image src="http://ucmor.edu.mx/portal%20Archivos/ccf397_3ec3f5fafb93420fa408975b803e0fc7_002.jpg" thumbnail />
                  <h4 className="Card-Title">Maestrias</h4>
                  </a>
                </Col>
              </Row>
                
            </Container>

          </div>
        </div>

        <Footer/>
      
      </div>
    );
  }
}

export default App;
