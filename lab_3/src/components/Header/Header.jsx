import React, {useContext, useState} from "react";
import "./stylesHeader.scss";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const SwitchIcon = (isOpened) => {
    return isOpened === true ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>;
}

const ToggleMenu = ({id, "aria-controls":area, onClick, className}) => {
    const switchUtility = () => {setOpen(!isOpened); onClick()};

    const [isOpened, setOpen] = useState(false);
    return <button aria-controls={area} onClick={switchUtility} className={className} id={id}>{SwitchIcon(isOpened)}</button>;
}

const Header = () => (

    <header>
        <Navbar className="justify-content-between bg-black" variant="dark" expand="sm">
            <Navbar.Brand to="/" as={Link}>ЧЄРЄШНЯ</Navbar.Brand>
            <Navbar.Toggle id="baton" aria-controls="nav-bar" as={ToggleMenu}/>
            <Navbar.Collapse id="nav-bar">
                <Nav>
                    <Nav.Link to="/about" as={Link}>About</Nav.Link>
                    <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
                    <Nav.Link to="/tracks" as={Link}>Tracks</Nav.Link>
                    <Nav.Link className="invert" to="/cart" as={Link}><FontAwesomeIcon icon={faShoppingCart}/> Cart
                    </Nav.Link>
                    <Nav.Link className="invert" to="/login" as={Link}><FontAwesomeIcon icon={faUser}/> Log In
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;
