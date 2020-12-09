import React from "react";
import './stylesBasket.scss';
import {Col, Container, Row} from "react-bootstrap";
import BasketRow from "../BasketRow";

const Basket = () =>
    (
        <Container>
            <Row>
                <Col xs={7}>
                    <div className='basket__thead'>
                        <Row className='header'>
                            <Col className="header-item" sm={{span: 4, offset: 2}}>Product</Col>
                            <Col className="header-item" sm={3}>Amount</Col>
                            <Col className="header-item" sm={3}>License Review</Col>
                        </Row>
                        <Row>
                            <Col sm={1}>Tracks</Col>
                            <Col sm={11}>
                                <hr/>
                            </Col>
                        </Row>
                    </div>
                    <div className='basket__tbody'>
                        <BasketRow
                            url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/1200px-Kvadrato.svg.png'
                            product='биточек assssssssssssssssssssssssssssssssssssssssssss' amount='100$' license='license'/><BasketRow
                            url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/1200px-Kvadrato.svg.png'
                            product='биточек assssssssssssssssssssssssssssssssssssssssssss' amount='100$' license='license'/><BasketRow
                            url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/1200px-Kvadrato.svg.png'
                            product='биточек assssssssssssssssssssssssssssssssssssssssssss' amount='100$' license='license'/>
                    </div>
                </Col>
                <Col xs={{span: 4, offset: 1}}>
                    <div className='bg-dark p-3 px-5'>
                        <input className='bg-dark border-white w-100 m-auto text-white' placeholder='Coupon code' type="text"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );

export default Basket;
