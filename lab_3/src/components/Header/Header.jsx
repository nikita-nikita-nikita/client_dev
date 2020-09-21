import React from "react";
import "./styles.scss";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
    <header>
        <Navbar className="justify-content-between bg-black" variant="dark">
            <Navbar.Brand to="/" as={Link}>Navbar</Navbar.Brand>
            <Nav>
                <Nav.Link to="/about" as={Link}>About</Nav.Link>
                <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
                <Nav.Link to="/tracks" as={Link}>Tracks</Nav.Link>
                <Nav.Link to="/login" as={Link}>Tracks</Nav.Link>
                <Nav.Link className="invert" to="/cart" as={Link}><FontAwesomeIcon icon={faShoppingCart}/>Cart</Nav.Link>
            </Nav>
        </Navbar>
    </header>
);

export default Header;
