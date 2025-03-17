import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './PendingNav.module.css';
import dataPendingLogo from './../assets/img/dataPendingLogo.jpg';

function PendingNav () {
    return (
        <Navbar className="bg-body-dark" sticky="top" expand="md">
        <Navbar.Brand href="#home" className={styles.logo}>
        <img
            src={dataPendingLogo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggler}></Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="https://sean-malavet.com/" className={styles.navLink} target="_blank">About</Nav.Link>
            <Nav.Link href="https://forms.gle/LB9mABBYdfu6SxjZA" className={styles.navLink} target="_blank">Feedback</Nav.Link>
        </Navbar.Collapse>

      </Navbar>
    );
}

export default PendingNav