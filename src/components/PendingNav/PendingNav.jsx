import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './PendingNav.module.css';
import dataPendingLogo from '../../assets/img/dataPendingLogo.jpg';
import {Link} from "react-router-dom"

function PendingNav () {
    return (
        <Navbar className="bg-body-dark mb-lg-4" sticky="top" expand="md">

        <Navbar.Brand className={styles.logo}>
        <Link to="/">
            <img
                src={dataPendingLogo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggler}></Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="https://sean-malavet.com/portfolio" className={styles.navLink} target="_blank">About</Nav.Link>
            <Nav.Link href="https://forms.gle/LB9mABBYdfu6SxjZA" className={styles.navLink} target="_blank">Feedback</Nav.Link>
        </Navbar.Collapse>

      </Navbar>
    );
}

export default PendingNav