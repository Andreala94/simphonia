import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
return (
    <Container fluid className="p-0 m-0">
        <Navbar expand="lg" className="bg-success p-1 m-0">
            <Container >
                <Navbar.Brand href="#" className='text-white fw-bold'>Simphonia</Navbar.Brand>
            </Container>
        </Navbar>
    </Container>
);
}

export default NavBar;