import NavbarLogo from './NavbarLogo';
import NavbarTitle from './NavbarTitle';
import { Container, Navbar } from 'react-bootstrap';

export default function NavbarNotFound() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <NavbarLogo />
                    <NavbarTitle />
                </div>
            </Container>
        </Navbar>
    )
}
