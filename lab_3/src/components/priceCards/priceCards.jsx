import React, {useContext, useState} from 'react';
import {Image, Button} from 'semantic-ui-react';
import Card from "react-bootstrap/Card";
import "./priceCards.scss";
import Accordion from 'react-bootstrap/Accordion'
import {faAngleUp, faTag, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AccordionContext, useAccordionToggle} from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal className="modal-pop"
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Full license
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Please, read carefully!</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum earum eius id in itaque molestiae, nemo officiis quas recusandae, reiciendis sequi tempore tenetur. Ad amet dolorem doloremque, dolorum et excepturi facilis fuga harum iusto maxime molestiae nihil quia quibusdam quisquam quo repellat tenetur. Architecto dolor dolorum perspiciatis! A commodi consequatur dolor, excepturi exercitationem expedita molestiae obcaecati perspiciatis praesentium quia quidem quisquam quo, ratione soluta tempore temporibus ullam vel? A, harum, quis. Accusantium aperiam commodi consectetur ex ipsum libero, magnam, numquam officia officiis provident quasi quidem sunt voluptate. Aperiam cumque eligendi facilis harum illum ipsam iste iusto, libero magnam magni modi odio officia omnis ratione, repellendus? Aperiam blanditiis consequatur consequuntur eos error excepturi illum inventore modi molestias nesciunt nihil non nulla obcaecati reiciendis, rem repellendus sed sunt unde vero voluptatum! Ad amet consectetur consequatur culpa doloribus eius error esse eum fugiat hic illum ipsam iste, maxime minus modi molestias necessitatibus numquam obcaecati, odit officia omnis, praesentium ratione rem rerum sit unde velit voluptate? A accusamus atque beatae consectetur debitis, dolorem excepturi exercitationem ipsam maxime nihil officiis provident quo quod similique suscipit, totam voluptatibus? Doloremque eaque inventore quasi saepe. Cumque dicta dolorum eum fuga iste laboriosam laborum minima molestias, odit officiis porro qui quis repudiandae rerum ut! Ab alias amet commodi corporis doloremque error, maiores minus odio officia, quaerat tempore voluptatibus? Adipisci aliquam assumenda enim et ex, magni maiores minima, mollitia reprehenderit saepe tempore ut vero. Amet architecto blanditiis consectetur, consequuntur delectus deleniti eos esse excepturi facere facilis hic in ipsa iure molestias nam necessitatibus nobis, nostrum officiis omnis placeat, quidem quis reiciendis sapiente totam ullam vitae voluptates voluptatibus. A ab consequuntur culpa delectus deleniti eaque eos exercitationem ipsa iure magni molestiae molestias nam, optio, provident quibusdam quidem voluptate voluptatum! A consequuntur cumque dignissimos ducimus eius, error fuga id ipsa labore maiores maxime mollitia nihil nulla officia rerum! Blanditiis corporis debitis illum ipsa laborum quia sapiente ut voluptatum! Aliquid illum necessitatibus non rem? Ab aliquid, asperiores eveniet iure labore nemo possimus quaerat totam veniam! Aliquam beatae commodi esse eum molestiae placeat repellendus temporibus tenetur. Accusantium aliquam cum, cupiditate delectus dignissimos, eaque earum eos eveniet ipsum labore magnam magni minima nam neque odio officiis quam quos repellat reprehenderit sapiente suscipit ullam ut veritatis vero vitae. Alias animi at, cum cumque cupiditate deleniti dicta dolorum error esse facere impedit, in ipsum itaque laboriosam libero minima minus nobis obcaecati odio optio ratione recusandae reprehenderit sequi suscipit unde vitae voluptatem. Accusantium aliquid doloremque excepturi illo laudantium magnam perferendis, tempore unde voluptas! Doloremque, mollitia nostrum? Ad adipisci asperiores aspernatur atque consequatur debitis dignissimos distinctio dolor eius enim exercitationem, explicabo fuga impedit iusto laborum laudantium minima minus molestiae neque nesciunt nostrum numquam odit officia omnis praesentium quaerat qui repellat sed sint soluta ullam vel, velit voluptas. Alias aperiam debitis deleniti ea eius expedita modi praesentium quibusdam sapiente soluta. Aspernatur ex minus natus quos vitae! Ab assumenda consectetur eveniet excepturi pariatur reiciendis soluta voluptates? Ea, eligendi harum id laborum magnam nesciunt obcaecati vero! Aut autem corporis debitis deleniti eos facere in incidunt ipsam laudantium minima nam nemo qui quia reprehenderit sit, soluta sunt! At dolorem dolorum placeat veniam vero. Accusantium, ad architecto corporis, deleniti dolores eos error et excepturi explicabo facere hic, illo inventore iure laboriosam laborum maiores maxime minus mollitia natus nulla odio optio praesentium provident quam quibusdam reiciendis rerum similique sint soluta sunt suscipit ullam vel vero. Assumenda consectetur distinctio dolore exercitationem illo laudantium numquam optio recusandae repudiandae ut? Animi assumenda dicta dignissimos eligendi eum expedita hic illo incidunt ipsum minima, mollitia necessitatibus obcaecati quae quia ratione repudiandae rerum similique sit velit veritatis. Ab animi asperiores aut consequuntur culpa cumque, deleniti dignissimos distinctio ducimus eius est excepturi fuga fugit, harum itaque laboriosam minus nam non nulla numquam, omnis perspiciatis porro provident quidem suscipit unde veniam! Animi atque beatae cupiditate laudantium mollitia nemo numquam odit quos sint voluptatum? A assumenda, consectetur delectus dignissimos eligendi error esse expedita facilis fugit illo, illum libero magnam maiores minima nesciunt obcaecati possimus sapiente sunt tenetur totam ullam unde ut voluptatum. Ad alias dolorem magnam maxime officia perspiciatis repellendus! Distinctio error fugiat optio. Animi asperiores consequuntur cumque dicta dignissimos dolore dolorem dolorum eius eligendi et exercitationem illum ipsa ipsam magnam magni modi natus neque nesciunt nihil, nisi nobis nulla pariatur perspiciatis possimus quam qui quibusdam quod quos saepe, sequi soluta tenetur velit veniam? Accusantium asperiores assumenda hic magni, quia soluta ullam ut. Atque aut cum deleniti deserunt dicta doloremque dolorum enim error ex hic, illum ipsa laborum, laudantium magnam molestiae, natus necessitatibus nesciunt nihil numquam odit officia perspiciatis possimus quisquam quo ratione sed sequi tempore ut veniam voluptates. Ab aliquid aspernatur doloribus fugiat hic molestiae nulla quibusdam repellat ut vero? Aliquid amet animi aspernatur deserunt esse, eveniet in, laboriosam maxime molestiae omnis quaerat quo rerum ullam, veniam vitae? Aliquam at excepturi illo maxime perferendis porro vel. A atque consectetur consequatur dicta dolores doloribus dolorum ea eligendi et facilis incidunt, iste iusto laudantium mollitia nisi obcaecati odio omnis placeat quaerat quasi quos repellat tenetur. Deleniti eveniet inventore minima molestias velit? Architecto impedit magnam non perferendis porro. Assumenda debitis, ducimus maiores quas quo sit. Alias animi aperiam asperiores atque debitis dignissimos dolore dolorem ducimus enim, est eveniet explicabo ipsum iure magni maiores minus necessitatibus nesciunt numquam odit optio placeat provident quaerat quam quo quod reiciendis rem repellat reprehenderit sed similique sit tempora tenetur vitae. Accusamus accusantium dicta doloremque doloribus eum fugiat, ipsam iusto laborum magnam maxime obcaecati officia quia ratione reprehenderit saepe sapiente voluptates. Autem cum delectus dolor doloremque error in, itaque laboriosam neque nesciunt odit praesentium quo sapiente sequi veritatis vitae! A alias incidunt quaerat tempora voluptate. Ab accusamus architecto aspernatur commodi cum cupiditate ducimus eligendi esse eveniet ex fuga impedit iste labore, obcaecati officia quod, suscipit. Laboriosam non nulla placeat repellendus saepe? Alias amet culpa, debitis deserunt eius et explicabo fugit iste labore laudantium molestiae necessitatibus non officiis, quam, quas quidem sequi sint ullam veniam vitae. Adipisci architecto, aspernatur deleniti doloribus ea eligendi eum inventore laborum, magnam nemo quaerat quod vel voluptatibus.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="license-close-button" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function FullLicenseBox(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button className={props.isPopular ? "license-button-popular" : "license-button"} onClick={() => setModalShow(true)}>
                READ FULL LICENSE
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


const ContextAwareToggle = ({eventKey, callback}) => {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    let buttonContent = isCurrentEventKey ?
        <span><FontAwesomeIcon icon={faAngleUp}/> LESS</span> : <span><FontAwesomeIcon icon={faAngleDown}/> MORE</span>;
    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            className="card-footer-button"
        >
            {buttonContent}
        </button>
    );
}

const PriceCards = () => {
    const [activeKey, setActiveKey] = useState(null);

    return (
            <CardDeck className="card-container">
                <Card className="card popular-card">
                <div className="head">
                    <p>POPULAR</p>
                    <div className="license-type">
                        Wav Lease
                    </div>
                    <div className="price">
                        $49.99
                    </div>
                    <div className="per-unit">
                        PER UNIT
                    </div>
                </div>
                <div className="description">
                    <ul>
                        <li>Untagged Wav</li>
                        <li>Sell up to 10000 units</li>
                        <li>Commercial Use</li>
                        <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                        <li>Must Credit (prod. eddienubes)</li>

                    </ul>
                    <div className="license-button-container">
                        <FullLicenseBox isPopular={true}/>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-footer-caption">
                        <span><FontAwesomeIcon className="icon" icon={faTag}/> FREE BEATS</span>
                        <p>BUY 2, GET 1 FREE</p>
                    </div>
                    <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                        <Accordion.Collapse className="card-footer-content" eventKey="0">
                            <div>
                                <p>
                                    BUY 3, GET 2 FREE
                                </p>
                                <p>
                                    BUY 4, GET 3 FREE
                                </p>
                                <p>
                                    BUY 5, GET 4 FREE
                                </p>
                                <p>
                                    BUY 6, GET 5 FREE
                                </p>
                                <p>
                                    BUY 10, GET 10 FREE
                                </p>
                            </div>
                        </Accordion.Collapse>
                        <div className="button-container">
                            <ContextAwareToggle eventKey="0"/>
                        </div>

                    </Accordion>
                </div>

            </Card>
                <Card className="card">
                    <div className="head">
                        <div className="license-type">
                            MP3 Lease
                        </div>
                        <div className="price">
                            $29.99
                        </div>
                        <div className="per-unit">
                            PER UNIT
                        </div>
                    </div>
                    <div className="description">
                        <ul>
                            <li>Untagged mp3</li>
                            <li>Sell up to 5000 units</li>
                            <li>Commercial Use</li>
                            <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                            <li>Must Credit (prod. cherriesby)</li>
                        </ul>
                        <div className="license-button-container">
                            <FullLicenseBox/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-caption">
                            <span><FontAwesomeIcon className="icon" icon={faTag}/> FREE BEATS</span>
                            <p>BUY 2, GET 1 FREE</p>
                        </div>

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="1">
                                <div>
                                    <p>
                                        BUY 3, GET 2 FREE
                                    </p>
                                    <p>
                                        BUY 4, GET 3 FREE
                                    </p>
                                    <p>
                                        BUY 5, GET 4 FREE
                                    </p>
                                    <p>
                                        BUY 6, GET 5 FREE
                                    </p>
                                    <p>
                                        BUY 10, GET 10 FREE
                                    </p>
                                </div>
                            </Accordion.Collapse>
                            <div className="button-container">
                                <ContextAwareToggle eventKey="1"/>
                            </div>

                        </Accordion>
                    </div>

                </Card><Card className="card">
                    <div className="head">
                        <div className="license-type">
                            Track Out Lease
                        </div>
                        <div className="price">
                            $99.99
                        </div>
                        <div className="per-unit">
                            PER UNIT
                        </div>
                    </div>
                    <div className="description">
                        <ul>
                            <li>Untagged wav track stems</li>
                            <li>Sell up to 20000 units</li>
                            <li>Commercial Use</li>
                            <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                            <li>Must Credit (prod. cherriesby)</li>
                        </ul>
                        <div className="license-button-container">
                            <FullLicenseBox/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-caption">
                            <span><FontAwesomeIcon className="icon" icon={faTag}/> FREE BEATS</span>
                            <p>BUY 2, GET 1 FREE</p>
                        </div>

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="2">
                                <div>
                                    <p>
                                        BUY 3, GET 2 FREE
                                    </p>
                                    <p>
                                        BUY 4, GET 3 FREE
                                    </p>
                                    <p>
                                        BUY 5, GET 4 FREE
                                    </p>
                                    <p>
                                        BUY 6, GET 5 FREE
                                    </p>
                                    <p>
                                        BUY 10, GET 10 FREE
                                    </p>
                                </div>
                            </Accordion.Collapse>
                            <div className="button-container">
                                <ContextAwareToggle eventKey="2"/>
                            </div>

                        </Accordion>
                    </div>

                </Card>
                <Card className="card">
                    <div className="head">
                        <div className="license-type">
                            Unlimited Lease
                        </div>
                        <div className="price">
                            $219.99
                        </div>
                        <div className="per-unit">
                            PER UNIT
                        </div>
                    </div>
                    <div className="description">
                        <ul>
                            <li>Untagged Wav Track stems</li>
                            <li>Unlimited Distribution</li>
                            <li>Unlimited Commercial Use</li>
                            <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                            <li>Must Credit (prod. eddienubes)</li>
                        </ul>
                        <div className="license-button-container">
                            <FullLicenseBox/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-caption">
                            <span><FontAwesomeIcon className="icon" icon={faTag}/> FREE BEATS</span>
                            <p>BUY 2, GET 1 FREE</p>
                        </div>

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="3">
                                <div>
                                    <p>
                                        BUY 3, GET 2 FREE
                                    </p>
                                    <p>
                                        BUY 4, GET 3 FREE
                                    </p>
                                    <p>
                                        BUY 5, GET 4 FREE
                                    </p>
                                    <p>
                                        BUY 6, GET 5 FREE
                                    </p>
                                    <p>
                                        BUY 10, GET 10 FREE
                                    </p>
                                </div>
                            </Accordion.Collapse>
                            <div className="button-container">
                                <ContextAwareToggle eventKey="3"/>
                            </div>

                        </Accordion>
                    </div>

                </Card><Card className="card">
                    <div className="head">
                        <div className="license-type">
                            Exclusive License
                        </div>
                        <div className="price">
                            CONTACT
                        </div>
                        <div className="per-unit">
                            ME
                        </div>
                    </div>
                    <div className="description">
                        <ul>
                            <li>Untagged Wav Track stems</li>
                            <li>Unlimited Distribution</li>
                            <li>Unlimited Commercial Use</li>
                            <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                            <li>Must Credit (prod. eddienubes)</li>
                        </ul>
                        <div className="license-button-container">
                            <FullLicenseBox/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-caption">
                            <span><FontAwesomeIcon className="icon" icon={faTag}/> FREE BEATS</span>
                            <p>BUY 2, GET 1 FREE</p>
                        </div>

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="4">
                                <div>
                                    <p>
                                        BUY 3, GET 2 FREE
                                    </p>
                                    <p>
                                        BUY 4, GET 3 FREE
                                    </p>
                                    <p>
                                        BUY 5, GET 4 FREE
                                    </p>
                                    <p>
                                        BUY 6, GET 5 FREE
                                    </p>
                                    <p>
                                        BUY 10, GET 10 FREE
                                    </p>
                                </div>
                            </Accordion.Collapse>
                            <div className="button-container">
                                <ContextAwareToggle eventKey="4"/>
                            </div>

                        </Accordion>
                    </div>

                </Card></CardDeck>
    )
};

export default PriceCards;
