import React from "react";
import './styleBasketRow.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {LicenseBox} from "../priceCards";
import {Table} from "semantic-ui-react";


const BasketRow = ({product, amount, licenseType, imgUrl}) => {
    return (
        <Table.Row className="main-row">
            <Table.Cell verticalAlign="middle" textAlign="center" className="img-container row-item" sm={2}>
                <img className='img-cart'
                     src={imgUrl}
                     alt="Track"/>
            </Table.Cell>
            <Table.Cell textAlign="left" verticalAlign="middle" className="row-item">
                {product}
            </Table.Cell>
            <Table.Cell textAlign="center" verticalAlign="middle" className="row-item">
                {licenseType}
            </Table.Cell>
            <Table.Cell textAlign="center" verticalAlign="middle" className="row-item">
                {amount}
            </Table.Cell>
            <Table.Cell textAlign="center" width={1} verticalAlign="middle" className="row-item button-license">
                <LicenseBox className="button" text="License"/>
            </Table.Cell>
            <Table.Cell width={1} verticalAlign="middle" className="row-item">
                <FontAwesomeIcon className='basket__remove-item' icon={faTimes}/>
            </Table.Cell>
        </Table.Row>
    )
}

export default BasketRow;