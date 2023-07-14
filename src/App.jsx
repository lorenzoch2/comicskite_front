
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function App() {
  
    return (
      <div className="app-container">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/path/to/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <h2 className="mx-auto" style={{ color: '#ebca6d' }}>
            COMICSKITES – VENTA DE COMICS
          </h2>
            <Nav className="ml-auto">
            <Button variant="primary" className="mr-2" style={{ backgroundColor: 'black', borderColor: '#ebca6d', color: '#ebca6d'}}>Registro</Button>
            <Button variant="primary" style={{ backgroundColor: 'black', borderColor: '#ebca6d', color: '#ebca6d' , marginLeft: '10px'}}>Sesión</Button>
            </Nav>
          </Container>
        </Navbar>
        <div style={{ backgroundColor:'#295b6fff', padding: '1rem' }}>
        <div style={{ backgroundColor: 'black', padding: '1rem' }}>
          <div style={{ backgroundColor: '#295b6fff', padding: '1rem' , border: '1px solid white'}}>
            <img src="/path/to/image.jpg" alt="Imagen" style={{ width: '18cm', height: '10cm' }} />
          </div>
        </div>
      </div>
       
      </div>
    );
  
  }
export default App
