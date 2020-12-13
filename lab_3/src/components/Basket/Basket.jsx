import React, {useState} from "react";
import './stylesBasket.scss';
import BasketRow from "../BasketRow";
import {PlayBack, Track} from "../tracksTable/track";
import {Table} from "semantic-ui-react";
import PlaceHolderOverInput from "../ContactForm/PlaceHolderOverInput";
import {Link} from "react-router-dom";
import {VerticallyCenteredModal} from "../priceCards/priceCards";



const Basket = ({tracks, instance, selectedTrack, setSelectedTrack}) => {

    const [isDisabled, setDisabled] = React.useState(true);
    const [modalShow, setModalShow] = React.useState(false);

    const checkInputHandler = (e) => {
        setDisabled(!isDisabled)
    };

return (
        // <div>
        //     <Row>
        //         <Col xs={6}>
        //             <div className='basket__thead'>
        //                 <Row className='header'>
        //                     <Col className="header-item" sm={{span: 4, offset: 2}}>Product</Col>
        //                     <Col className="header-item" sm={3}>License type</Col>
        //                     <Col className="header-item" sm={3}>Amount</Col>
        //                     <Col className="header-item" sm={3}>License Review</Col>
        //                 </Row>
        //                 <Row>
        //                     <Col sm={1}>Tracks</Col>
        //                     <Col sm={11}>
        //                         <hr/>
        //                     </Col>
        //                 </Row>
        //             </div>
        //             <div className='basket__tbody'>
        //                 <BasketRow
        //                     url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/1200px-Kvadrato.svg.png'
        //                     product='биточек assssssssssssssssssssssssssssssssssssssssssss' amount='100$'
        //                     license='license'/>
        //                 <BasketRow
        //                     url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/1200px-Kvadrato.svg.png'
        //                     product='биточек assssssssssssssssssssssssssssssssssssssssssss' amount='100$'
        //                     license='license'/>
        //                 <BasketRow
        //                     url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/1200px-Kvadrato.svg.png'
        //                     product='биточек assssssssssssssssssssssssssssssssssssssssssss' amount='100$'
        //                     license='license'/>
        //             </div>
        //         </Col>
        //         <Col xs={{span: 4, offset: 1, order: "last"}}>
        //             <div className='bg-dark p-3 px-5'>
        //                 <input className='bg-dark border-white w-100 m-auto text-white' placeholder='Coupon code'
        //                        type="text"/>
        //             </div>
        //         </Col>
        //     </Row>
        // </div>
        <div className="container">
            <Table className="cart" celled structured striped unstackable>
                <Table.Header className="header">
                    <Table.Row>
                        <Table.HeaderCell width={1} className="header-item">
                        </Table.HeaderCell>
                        <Table.HeaderCell width={3} textAlign="left" className="header-item">PRODUCT</Table.HeaderCell>
                        <Table.HeaderCell width={3} textAlign="center" className="header-item">LICENSE
                            TYPE</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center" className="header-item">AMOUNT</Table.HeaderCell>
                        <Table.HeaderCell width={3} textAlign="center" className="header-item">LICENSE
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
                    <BasketRow amount={"100$"}
                               imgUrl="/covers/W6MT8iR.png"
                               licenseType="mp3Lease"
                               product="PATIENCE"> </BasketRow><BasketRow amount={"100$"}
                               imgUrl="/covers/W6MT8iR.png"
                               licenseType="mp3Lease"
                               product="PATIENCE"> </BasketRow><BasketRow amount={"100$"}
                               imgUrl="/covers/W6MT8iR.png"
                               licenseType="mp3Lease"
                               product="PATIENCE"> </BasketRow><BasketRow amount={"100$"}
                               imgUrl="/covers/W6MT8iR.png"
                               licenseType="mp3Lease"
                               product="PATIENCE"> </BasketRow><BasketRow amount={"100$"}
                               imgUrl="/covers/W6MT8iR.png"
                               licenseType="mp3Lease"
                               product="PATIENCE"> </BasketRow>
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

                        <button className="coupon-button" type="button" onClick={() => setModalShow(true)}>READ LICENSE</button>
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
    )};

export default Basket;

