import React from "react";
import "./footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    return (
        <footer>
            <div className="copyright">
                <span>Cherries By</span>
                <span>Copyright 2020 <FontAwesomeIcon className="circle" icon={faCircle}/>  <a href="#">Terms of use</a></span>

            </div>
            <div className="links">
                <a href="#" className="youtube"><FontAwesomeIcon  icon={faYoutube}/></a>
                <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </footer>
    )
}

export default Footer;