import React, {useState} from "react";
import './stylesBasket.scss';
import BasketRow from "../BasketRow";
import {Table} from "semantic-ui-react";
import PlaceHolderOverInput from "../ContactForm/PlaceHolderOverInput";
import {Link} from "react-router-dom";
import {VerticallyCenteredModal} from "../priceCards/priceCards";
import {useSelector} from 'react-redux';

const Basket = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);

    const [isDisabled, setDisabled] = React.useState(true);
    const [modalShow, setModalShow] = React.useState(false);

    const checkInputHandler = (e) => {
        setDisabled(!isDisabled)
    };

    return (
        <div className="container">
            <Table className="cart" celled structured striped unstackable>
                <Table.Header className="header">
                    <Table.Row>
                        <Table.HeaderCell width={1} className="header-item">
                        </Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign="left" className="header-item">PRODUCT</Table.HeaderCell>
                        <Table.HeaderCell width={3} textAlign="center" className="header-item">LICENSE
                            TYPE</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center" className="header-item">AMOUNT</Table.HeaderCell>
                        <Table.HeaderCell width={4} textAlign="center" className="header-item">LICENSE
                            REVIEW</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="left" className="header-item"> </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center" width={1} className="header-item separator">
                            TRACKS
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan='4' className="header-item separator">
                            <hr/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        shoppingCart.cart.map((cartItem) =>
                                <BasketRow
                                    id={parseInt(cartItem.track.id)}
                                    amount="123123"
                                    imgUrl={cartItem.track.imgUrl}
                                    product={cartItem.track.name}
                                    licenseType="mp3 lease"/>
                        )
                    }
                    {/*<BasketRow amount={"100$"}*/}
                    {/*           imgUrl="/covers/W6MT8iR.png"*/}
                    {/*           licenseType="mp3Lease"*/}
                    {/*           product="PATIENCE"> </BasketRow>*/}
                </Table.Body>
            </Table>
            <aside className="sidebar">
                <div className="sidebar-container">

                    <form><PlaceHolderOverInput className={"coupon-input"}
                                                labelStyle={"label-style"}
                                                name="coupon"
                                                text="Bonus coupon"
                                                required={true}>
                    </PlaceHolderOverInput>
                        <button className="coupon-button" type="submit">APPLY COUPON</button>
                    </form>
                    <form>
                        <div className="numbers-container gross">
                            <div>Gross</div>
                            {/*PUT GROSS VALUE HERE*/}
                            <div className="number">$99.90</div>
                        </div>
                        <div className="numbers-container discount">
                            <div>Discount</div>
                            {/*PUT DISCOUNT VALUE HERE*/}
                            <div className="discount-number number">-$0.00</div>
                        </div>
                        <div className="numbers-container total">
                            <div>Total</div>
                            {/*PUT TOTAL VALUE HERE*/}
                            <div className="total-number number">-$0.00</div>
                        </div>
                        {/*TODO: MODAL RELOADS PAGE ISSUE*/}
                        {/*<PolicyBox className="button-review" text="REVIEW LICENSE"/>*/}

                        <button className="coupon-button" type="button" onClick={() => setModalShow(true)}>READ
                            LICENSE
                        </button>
                        <VerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                        <div className="agreement">
                            <label className="cart-label">
                                <input onChange={(e) => checkInputHandler(e)} type="checkbox" name="checked"/>
                                <span className="labeled-text">
                                   I reviewed and agree to the Track(s) License Agreements
                                </span>
                            </label>
                            <button type="submit" className="buy-button" disabled={isDisabled}>PURCHASE</button>
                        </div>
                    </form>
                    <span className="offer-sign-up">Would you like keep records of your Transaction(s)
                        for future download of your Purchased files? <Link to="/register">Login or Create</Link> a free account here.</span>
                </div>
            </aside>
        </div>
    )
};


export default Basket;

