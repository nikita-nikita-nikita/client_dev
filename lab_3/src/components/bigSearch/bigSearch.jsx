import React from "react";
import "./stylesBigSearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const BigSearch = () =>
    (
        <div className="big-search">
            <h1 className="logo">ЧЭРЭШНЯ</h1>
            <div className="search">
                <input placeholder="Search..." type="search"/>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
        </div>
    );

export default BigSearch;
