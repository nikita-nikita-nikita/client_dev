import React, {useContext, useState} from "react";
import "./stylesHeader.scss";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {loggedIn} from "../../redux/actions";

const SwitchIcon = (isOpened) => {
    return isOpened === true ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>;
}

const ToggleMenu = ({id, "aria-controls":area, onClick, className}) => {
    const switchUtility = () => {setOpen(!isOpened); onClick()};

    const [isOpened, setOpen] = useState(false);
    return <button aria-controls={area} onClick={switchUtility} className={className} id={id}>{SwitchIcon(isOpened)}</button>;
}

const Header = ({customer, loggedIn}) => {
    return (

        <header>
            <Navbar className="justify-content-between bg-black" variant="dark" expand="sm">
                <Navbar.Brand className="nav__main-caption" to="/" as={Link}>ЧЄРЄШНЯ</Navbar.Brand>
                <Navbar.Toggle id="baton" aria-controls="nav-bar" as={ToggleMenu}/>
                <Navbar.Collapse id="nav-bar">
                    <Nav>
                        <Nav.Link to="/tracks" as={Link}>Beats</Nav.Link>
                        <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
                        <Nav.Link to="/about" as={Link}>About</Nav.Link>
                        <Nav.Link className="invert cart" to="/checkout" as={Link}>
                            <FontAwesomeIcon icon={faShoppingCart}/> Cart
                        </Nav.Link>
                        {
                            !customer.isLoggedIn
                                ? <Nav.Link className="invert login" to="/login" as={Link}><FontAwesomeIcon icon={faUser}/>Log In</Nav.Link>
                                : <button className="invert-button" onClick={() => {
                                    loggedIn();
                                    localStorage.removeItem('token')
                                }}>Log out</button>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

const mapStateToProps = ({customer}) => ({
    customer
});

const mapDispatchToProps = {
    loggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
