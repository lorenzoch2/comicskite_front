import { Container, Navbar } from 'react-bootstrap';
import NavbarLogo from '../components/NavbarLogo';
import NavbarButtons from '../components/NavbarButtons';
import NavbarButtonsAdmin from '../components/NavbarButtonsAdmin';
import NavbarTitle from '../components/NavbarTitle';
import Context from '../Context/Context';
import { useContext } from 'react';

export default function NavbarComponent() {

  const { tokenContent } = useContext(Context);
  
    return (
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <NavbarLogo />
          </div>
          <div className="d-box">
            <NavbarTitle />
            {tokenContent.administrador === 0 ? <NavbarButtons /> : <NavbarButtonsAdmin />}
          </div>
        </Container>
      </Navbar>
    );
  }