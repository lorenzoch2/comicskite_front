import Navbar from 'react-bootstrap/Navbar';

export default function NavbarTitle() {
    return (
        <Navbar.Brand href="/">
        <div className="circle-border">
            <img
                src="img/comicskite_01.png"
                className="d-inline-block align-top"
                alt="Logo"
            />
        </div>
    </Navbar.Brand>
    );
}