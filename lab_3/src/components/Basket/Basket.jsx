import React from "react";
import './stylesBasket.scss';
import BasketRow from "../BasketRow";
import {PlayBack, Track} from "../tracksTable/track";
import {Table} from "semantic-ui-react";
import PlaceHolderOverInput from "../ContactForm/PlaceHolderOverInput";

const Basket = ({tracks, instance, selectedTrack, setSelectedTrack}) =>
    (
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
                        <Table.HeaderCell width={1} textAlign="left" className="header-item">LICENSE
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
                <div className="bg-dark p-3 px-5 sidebar-container">

                    <PlaceHolderOverInput className={"coupon-input"} labelStyle={"label-style"} name="coupon" text="Bonus coupon">
                    </PlaceHolderOverInput>


                </div>
            </aside>
        </div>
    );

export default Basket;

