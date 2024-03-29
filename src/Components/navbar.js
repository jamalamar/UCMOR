import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'


export default function NavBar () {
  return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">UCM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#verano">Curso de Verano</Nav.Link>
            <Nav.Link href="#talleres">Talleres</Nav.Link>
            <Nav.Link href="#oferta">Oferta Academica</Nav.Link>
            <Nav.Link href="#up">UP Emprendedor</Nav.Link>
            <Nav.Link href="#tv">UCMOR TV</Nav.Link>
            <Nav.Link href="#galeria">Galeria</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search bar Disabled

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          */}

        </Navbar.Collapse>
      </Navbar>
  )
}
