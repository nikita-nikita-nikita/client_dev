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


function VerticallyCenteredModal(props) {
    return (
        <Modal className="modal-pop"
               {...props}
               size="lg"
               centered
               scrollable
        >
            <Modal.Header className="modal-header" closeButton>
                <div className="modal-header-text">FULL LICENSE DESCRIPTION</div>
            </Modal.Header>
            <Modal.Body>
                <p>This Non-Exclusive&nbsp;<strong>Unlimited Lease</strong>&nbsp;License Agreement (the “Agreement”),
                    having been made on and effective as of&nbsp;<strong>Thu, 10 Dec 2020 05:04:50 -0500&nbsp;</strong>(the
                    “Effective Date”) by and between&nbsp;<strong>Producer Name&nbsp;</strong>p/k/a&nbsp;
                    <strong>Sinato&nbsp;</strong>(the “Producer” or “Licensor”); and&nbsp;
                    <strong>Licensee&nbsp;</strong>residing at&nbsp;<strong>[N/A]&nbsp;</strong>(“You” or “Licensee”),
                    sets forth the terms and conditions of the Licensee’s use, and the rights granted in, the Producer’s
                    instrumental music file entitled&nbsp;<strong>Samurai (Contract Preview Only)&nbsp;</strong>(the
                    “Beat”) in consideration for Licensee’s payment of&nbsp;
                    <strong>$</strong><strong>199.9&nbsp;</strong>(the “License Fee”), on a so-called&nbsp;<strong>“Unlimited
                        Lease”</strong>&nbsp;basis.</p>
                <p>This Agreement is issued solely in connection with and for Licensee's use of the Beat pursuant and
                    subject to all terms and conditions set forth herein.</p>
                <ol>
                    <li><strong>License Fee:</strong>&nbsp;The Licensee to shall make payment of the License Fee to
                        Licensor on the date of this Agreement. All rights granted to Licensee by Producer in the Beat
                        are conditional upon Licensee’s timely payment of the License Fee. The License Fee is a one-time
                        payment for the rights granted to Licensee and this Agreement is not valid until the License Fee
                        has been paid. Payments are final and non-refundable no matter the circumstances.
                    </li>
                </ol>
                <ol>
                    <li><strong>Delivery of the Beat:</strong></li>
                    <ol>
                        <li>Licensor agrees to deliver the Beat as a high-quality&nbsp;<strong>MP3,
                            WAV &amp; TRACKSTEMS,</strong>&nbsp;as such terms are understood in the music industry.
                        </li>
                        <li>Licensor shall use commercially reasonable efforts to deliver the Beat to Licensee
                            immediately after payment of the License Fee is made. Licensee will receive the Beat via
                            email, to the email address Licensee provided to Licensor.
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li><strong>Term:</strong>&nbsp;The Term of this Agreement shall be ten (10) years and this license
                        shall expire on the ten (10) year anniversary of the Effective Date.
                    </li>
                </ol>
                <ol>
                    <li><strong>Use of the Beat:</strong></li>
                    <ol>
                        <li>In consideration for Licensee’s payment of the License Fee, the Producer hereby grants
                            Licensee a limited&nbsp;<strong>non-exclusive, nontransferable&nbsp;</strong>license and the
                            right to incorporate, include and/or use the Beat in the preparation of one (1) new song or
                            to incorporate the Beat into a new piece of instrumental music created by the Licensee.
                            Licensee may create the new song or new instrumental music by recording his/her written
                            lyrics over the Beat and/or by incorporating portions/samples of the Beat into pre-existing
                            instrumental music written, produced and/or owned by Licensee. The new song or piece of
                            instrumental music created by the Licensee which incorporates some or all of the Beat shall
                            be referred to as the “New Song”. Permission is granted to Licensee to modify the
                            arrangement, length, tempo, or pitch of the Beat in preparation of the New Song for public
                            release.
                        </li>
                        <li>This License<strong>&nbsp;</strong>grants Licensee a worldwide, non-exclusive license to use
                            the Beat as incorporated in the New Song in the manners and for the purposes expressly
                            provided for herein, subject to the sale restrictions, limitations and prohibited uses
                            stated in this Agreement. Licensee acknowledges and agrees that any and all rights granted
                            to Licensee in the Beat pursuant to this Agreement are on a&nbsp;
                            <strong>NON-EXCLUSIVE</strong>&nbsp;basis and Producer shall continue to license the Beat
                            upon the same or similar terms and conditions as this Agreement to other potential
                            third-party licensees.
                            <ul>
                                <li>The New Song may be used for any promotional purposes, including but not limited to,
                                    a release in a single format, for inclusion in a mixtape or free compilation of
                                    music bundled together (EP or album), and/or promotional, non-monetized digital
                                    streaming;
                                </li>
                                <li>Licensee&nbsp;<strong>may</strong>&nbsp;perform the song publicly for-profit
                                    performances, including but not limited to, at a live performance (i.e. concert,
                                    festival, nightclub etc.), on terrestrial or satellite radio, and/or on the internet
                                    via third-party streaming services (Spotify, YouTube, iTunes Radio etc.). The New
                                    Song may be played on&nbsp;<strong>4</strong>&nbsp;terrestrial or satellite radio
                                    stations;
                                </li>
                                <li>The Licensee may use the New Song in synchronization with&nbsp;
                                    <strong>Three</strong>&nbsp;(<strong>3)</strong>&nbsp;audiovisual work no longer
                                    than eight (8) minutes in length (a “Video”). In the event that the New Song itself
                                    is longer than eight (8)&nbsp;minutes in length, the Video may not play for longer
                                    than the length of the New Song. The Video may be broadcast on any television
                                    network and/or uploaded to the internet for digital streaming and/or free
                                    download<strong>&nbsp;</strong>by the public including but not limited to on YouTube
                                    and/or Vevo. Producer grants no other synchronization rights to Licensee;
                                </li>
                                <li>The Licensee may make the New Song available for sale in physical and/or digital
                                    form and sell&nbsp;<strong>Unlimited</strong>&nbsp;downloads/physical music products
                                    and are allowed&nbsp;<strong>Unlimited</strong>&nbsp;streams. The New Song may be
                                    available for sale as a single and/or included in a compilation of other songs
                                    bundled together by Licensee as an EP or a full-length Album. The New Song may be
                                    sold via digital retailers for permanent digital download in mp3 format and/or
                                    physical format, including compact disc and vinyl records. For clarity and avoidance
                                    of doubt, the Licensee does NOT have the right to sell the Beat in the form that it
                                    was delivered to Licensee. The Licensee must create a New Song (or instrumental as
                                    detailed above) for its rights under this provision to a vest. Any sale of the Beat
                                    in its original form by Licensee shall be a material breach of this Agreement and
                                    the Licensee shall be liable to the Licensor for damages as provided hereunder.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </ol>
                <ol>
                    <ol>
                        <li>Subject to the Licensee’s compliance with the terms and conditions of this Agreement,
                            Licensee shall not be required to account or pay to Producer any royalties, fees, or monies
                            paid to or collected by the Licensee (expressly excluding mechanical royalties), or which
                            would otherwise be payable to Producer in connection with the use/exploitation of the New
                            Song as set forth in this Agreement.
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li><strong>Restrictions on the Use of the Beat:</strong>&nbsp;Licensee hereby agrees and
                        acknowledges that it is expressly prohibited from taking any action(s) and from engaging in any
                        use of the Beat or New Song in the manners, or for the purposes, set forth below:
                    </li>
                    <ol>
                        <li>The rights granted to Licensee are&nbsp;<strong>NON-TRANSFERABLE&nbsp;</strong>and that
                            Licensee may not transfer or assign any of its rights hereunder to any third-party;
                        </li>
                        <li>The Licensee shall not<strong>&nbsp;</strong>synchronize, or permit third parties to
                            synchronize, the Beat or New Song with any audiovisual works EXCEPT as expressly provided
                            for and pursuant to Paragraph 4(b)(iii) of this Agreement for use in one (1) Video. This
                            restriction includes, but is not limited to, use of the Beat and/or New Song in television,
                            commercials, film/movies, theatrical works, video games, and in any other form on the
                            Internet which is not expressly permitted herein.
                        </li>
                        <li>The Licensee shall not have the right to license or sublicense any use of the Beat or of the
                            New Song, in whole or in part, for any so-called “samples”.
                        </li>
                        <li>Licensee shall not engage in any unlawful copying, streaming, duplicating, selling, lending,
                            renting, hiring, broadcasting, uploading, or downloading to any database, servers,
                            computers, peer to peer sharing, or other file-sharing services, posting on websites, or
                            distribution of the Beat in the form, or a substantially similar form, as delivered to
                            Licensee. Licensee may send the Beat file to any individual musician, engineer, studio
                            manager or other people who are working on the New Song.
                        </li>
                        <li>THE LICENSEE IS EXPRESSLY PROHIBITED FROM REGISTERING THE BEAT AND/OR NEW SONG WITH ANY
                            CONTENT IDENTIFICATION SYSTEM, SERVICE PROVIDER, MUSIC DISTRIBUTOR, RECORD LABEL OR DIGITAL
                            AGGREGATOR (for example TuneCore or CDBaby, and any other provider of user-generated content
                            identification services). The purpose of this restriction is to prevent you from receiving a
                            copyright infringement takedown notice from a third party who also received a non-exclusive
                            license to use the Beat in a New Song. The Beat has already been tagged for Content
                            Identification (as that term is used in the music industry) by Producer as a pre-emptive
                            measure to protect all interested parties in the New Song. If you do not adhere to this
                            policy, you are in violation of the terms of this License and your license to use the Beat
                            and/or New Song may be revoked without notice or compensation to you.
                        </li>
                        <li>As applicable to both the underlying composition in the Beat and to the master recording of
                            the Beat: (i) The parties acknowledge and agree that the New Song is a “derivative work”, as
                            that term is used in the United States Copyright Act; (ii) As applicable to the Beat and/or
                            the New Song, there is no intention by the parties to create a joint work; and (iii) There
                            is no intention by the Licensor to grant any rights in and/or to any other derivative works
                            that may have been created by other third-party licensees.
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li><strong>Ownership:</strong></li>
                    <ol>
                        <li>The Producer is and shall remain the sole owner and holder of all rights, title, and
                            interest in the Beat, including all copyrights to and in the sound recording and the
                            underlying musical compositions written and composed by Producer. Nothing contained herein
                            shall constitute an assignment by Producer to Licensee of any of the foregoing rights.
                            Licensee may not, under any circumstances, register or attempt to register the New Song
                            and/or the Beat with the U.S. Copyright Office. The aforementioned right to register the New
                            Song and/or the Beat shall be strictly limited to Producer. Licensee will, upon request,
                            execute, acknowledge and deliver to Producer such additional documents as Producer may deem
                            necessary to evidence and effectuate Producer’s rights hereunder, and Licensee hereby grants
                            to Producer the right as attorney-in-fact to execute, acknowledge, deliver and record in the
                            U.S. Copyright Office or elsewhere any and all such documents if Licensee shall fail to
                            execute same within five (5) days after so requested by Producer.
                        </li>
                        <li>For the avoidance of doubt, you do not own the master or the sound recording rights in the
                            New Song. You have been licensed the right to use the Beat in the New Song and to
                            commercially exploit the New Song based on the terms and conditions of this Agreement.
                            <ul>
                                <li>Notwithstanding the above, you do own the lyrics or other original musical
                                    components of the New Song that were written or composed solely by you.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </ol>
                <ol>
                    <ol>
                        <li>
                            <p>With respect to the publishing rights and ownership of the underlying composition
                                embodied in the New Song, the Licensee, and the Producer hereby acknowledge and agree
                                that the underlying composition shall be owned/split between them as follows:</p>
                            <p> - <b>Licensee</b>, owns <b>50%</b> of the writers share.</p><p> - <b>Sina
                            Charbaf</b> (STIM), owns <b>50%</b> of the writers share.</p>
                            <ul>
                                <li>Producer shall own, control, and administer Fifty Percent (50%) of the so-called
                                    “Publisher’s Share” of the underlying composition. Licensee owns, controls and
                                    administers Fifty Percent (50%) of the so called “Publisher’s Share” of the
                                    underlying composition.
                                </li>
                                <ul>
                                    <li>In the event that Licensee wishes to register his/her interests and rights to
                                        the underlying composition of the New Song with their Performing Rights
                                        Organization (“PRO”), Licensee must simultaneously identify and register the
                                        Producer’s share and ownership interest in the composition to indicate that
                                        Producer wrote and owns 50% of the composition in the New Song and as the owner
                                        of 50% of the Publisher’s share of the New Song.
                                    </li>
                                </ul>
                            </ul>
                        </li>
                    </ol>
                </ol>
                <ol>
                    <ol>
                        <li>The licensee shall be deemed to have signed, affirmed and ratified its acceptance of the
                            terms of this Agreement by virtue of its payment of the License Fee to Licensor and its
                            electronic acceptance of its terms and conditions at the time Licensee made payment of the
                            License Fee.
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li><strong>Mechanical License:</strong>&nbsp;If any selection or musical composition, or any
                        portion thereof, recorded in the New Song hereunder is written or composed by Producer, in whole
                        or in part, alone or in collaboration with others, or is owned or controlled, in whole or in
                        part, directly or indirectly, by Producer or any person, firm, or corporation in which Producer
                        has a direct or indirect interest, then such selection and/or musical composition shall be
                        hereinafter referred to as a “Controlled Composition”. Producer hereby agrees to issue or cause
                        to be issued, as applicable, to Licensee, mechanical licenses in respect of each Controlled
                        Composition, which are embodied on the New Song. For that license, on the United States and
                        Canada sales, Licensee will pay mechanical royalties at one hundred percent (100%) of the
                        minimum statutory rate, subject to no cap of that rate for albums and/or EPs. For license
                        outside the United States and Canada, the mechanical royalty rate will be the rate prevailing on
                        an industry-wide basis in the country concerned on the date that this agreement has been entered
                        into.
                    </li>
                </ol>
                <ol>
                    <li><strong>Credit:</strong>&nbsp;Licensee shall have the right to use and permit others to use
                        Producer’s approved name, approved likeness, and other approved identification and approved
                        biographical material concerning the Producer solely for purposes of trade and otherwise without
                        restriction solely in connection with the New Song recorded hereunder. Licensee shall use best
                        efforts to have Producer credited as a “producer” and shall give Producer appropriate production
                        and songwriting credit on all compact discs, record, music video, and digital labels or any
                        other record configuration manufactured which is now known or created in the future that
                        embodies the New Song created hereunder and on all cover liner notes, any records containing the
                        New Song and on the front and/or back cover of any album listing the New Song and other musician
                        credits. The licensee shall use its best efforts to ensure that Producer is properly credited
                        and Licensee shall check all proofs for the accuracy of credits, and shall use its best efforts
                        to cure any mistakes regarding Producer's credit. In the event of any failure by Licensee to
                        issue the credit to Producer, Licensee must use reasonable efforts to correct any such failure
                        immediately and on a prospective basis. Such credit shall be in the substantial form: “<strong>Produced
                            by Sinato</strong>”.
                    </li>
                </ol>
                <ol>
                    <li><strong>Licensor’s Option:</strong>&nbsp;Licensor shall have the option, at Licensor’s sole
                        discretion, to terminate this License at any time within three (3) years of the date of this
                        Agreement upon written notice to Licensee. In the event that Licensor exercises this option,
                        Licensor shall pay to Licensee a sum equal to Two Hundred Percent (200%) of the License Fee paid
                        by Licensee. Upon Licensor’s exercise of the option, Licensee must immediately remove the New
                        Song from any and all digital and physical distribution channels and must immediately cease
                        access to any streams and/or downloads of the New Song by the general public.
                    </li>
                </ol>
                <ol>
                    <li><strong>Breach by Licensee:</strong></li>
                    <ol>
                        <li>The licensee shall have five (5) business days from its receipt of written notice by
                            Producer and/or Producer’s authorized representative to cure any alleged breach of this
                            Agreement by Licensee. Licensee’s failure to cure the alleged breach within five (5)
                            business days shall result in Licensee’s default of its obligations, its breach of this
                            Agreement, and at Producer's sole discretion, the termination of Licensee’s rights
                            hereunder.
                        </li>
                        <li>If Licensee engages in the commercial exploitation and/or sale of the Beat or New Song
                            outside of the manner and amount expressly provided for in this Agreement, Licensee shall be
                            liable to Producer for monetary damages in an amount equal to any and all monies paid,
                            collected by, or received by Licensee, or any third party on its behalf, in connection with
                            such unauthorized commercial exploitation of the Beat and/or New Song.
                        </li>
                        <li>Licensee recognizes and agrees that a breach or threatened breach of this Agreement by
                            Licensee give rise to irreparable injury to Producer, which may not be adequately
                            compensated by damages. Accordingly, in the event of a breach or threatened breach by the
                            Licensee of the provisions of this Agreement, Producer may seek and shall be entitled to a
                            temporary restraining order and a preliminary injunction restraining the Licensee from
                            violating the provisions of this Agreement. Nothing herein shall prohibit Producer from
                            pursuing any other available legal or equitable remedy from such breach or threatened
                            breach, including but not limited to the recovery of damages from the Licensee. The Licensee
                            shall be responsible for all costs, expenses or damages that Producer incurs as a result of
                            any violation by the Licensee of any provision of this Agreement. Licensee’ obligation shall
                            include court costs, litigation expenses, and reasonable attorneys' fees.
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li><strong>Warranties, Representations, and Indemnification:</strong></li>
                    <ol>
                        <li>Licensee hereby agrees that Licensor has not made any guarantees or promises that the Beat
                            fits the particular creative use or musical purpose intended or desired by the Licensee. The
                            Beat, its sound recording, and the underlying musical composition embodied therein are
                            licensed to the Licensee “as is” without warranties of any kind or fitness for a particular
                            purpose.
                        </li>
                        <li>Producer warrants and represents that he has the full right and ability to enter into this
                            agreement, and is not under any disability, restriction, or prohibition with respect to the
                            grant of rights hereunder. Producer warrants that the manufacture, sale, distribution, or
                            other exploitation of the New Song hereunder will not infringe upon or violate any common
                            law or statutory right of any person, firm, or corporation; including, without limitation,
                            contractual rights, copyrights, and right(s) of privacy and publicity and will not
                            constitute libel and/or slander. Licensee warrants that the manufacture, sale, distribution,
                            or other exploitation of the New Song hereunder will not infringe upon or violate any common
                            law or statutory right of any person, firm, or corporation; including, without limitation,
                            contractual rights, copyrights, and right(s) of privacy and publicity and will not
                            constitute libel and/or slander. The foregoing notwithstanding, Producer undertakes no
                            responsibility whatsoever as to any elements added to the New Song by Licensee, and Licensee
                            indemnifies and holds Producer harmless for any such elements. Producer warrants that he did
                            not “sample” (as that term is commonly understood in the recording industry) any copyrighted
                            material or sound recordings belonging to any other person, firm, or corporation
                            (hereinafter referred to as “Owner”) without first having notified Licensee. The licensee
                            shall have no obligation to approve the use of any sample thereof; however, if approved, any
                            payment in connection therewith, including any associated legal clearance costs, shall be
                            borne by Licensee. Knowledge by Licensee that “samples” were used by Producer which was not
                            affirmatively disclosed by Producer to Licensee shall shift, in whole or in part, the
                            liability for infringement or violation of the rights of any third party arising from the
                            use of any such “sample” from Producer to Licensee.
                        </li>
                        <li>Parties hereto shall indemnify and hold each other harmless from any and all third party
                            claims, liabilities, costs, losses, damages or expenses as are actually incurred by the
                            non-defaulting party and shall hold the non-defaulting party, free, safe, and harmless
                            against and from any and all claims, suits, demands, costs, liabilities, loss, damages,
                            judgments, recoveries, costs, and expenses; (including, without limitation, reasonable
                            attorneys' fees), which may be made or brought, paid, or incurred by reason of any breach or
                            claim of breach of the warranties and representations hereunder by the defaulting party,
                            their agents, heirs, successors, assigns and employees, which have been reduced to final
                            judgment; provided that prior to final judgment, arising out of any breach of any
                            representations or warranties of the defaulting party contained in this agreement or any
                            failure by defaulting party to perform any obligations on its part to be performed hereunder
                            the non-defaulting party has given the defaulting party prompt written notice of all claims
                            and the right to participate in the defense with counsel of its choice at its sole expense.
                            In no event shall Artist be entitled to seek injunctive or any other equitable relief for
                            any breach or non-compliance with any provision of this agreement.
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li><strong>Miscellaneous:</strong>&nbsp;This Agreement constitutes the entire understanding of the
                        parties and is intended as a final expression of their agreement and cannot be altered,
                        modified, amended or waived, in whole or in part, except by written instrument (email being
                        sufficient) signed by both parties hereto. This agreement supersedes all prior agreements
                        between the parties, whether oral or written. Should any provision of this agreement be held to
                        be void, invalid or inoperative, such decision shall not affect any other provision hereof, and
                        the remainder of this agreement shall be effective as though such void, invalid or inoperative
                        provision had not been contained herein. No failure by Licensor hereto to perform any of its
                        obligations hereunder shall be deemed a material breach of this agreement until the Licensee
                        gives Licensor written notice of its failure to perform, and such failure has not been corrected
                        within thirty (30) days from and after the service of such notice, or, if such breach is not
                        reasonably capable of being cured within such thirty (30) day period, Licensor does not commence
                        to cure such breach within said time period, and proceed with reasonable diligence to complete
                        the curing of such breach thereafter. This agreement shall be governed by and interpreted in
                        accordance with the laws of the&nbsp;<strong>Stockholm SE</strong><strong>&nbsp;</strong>applicable
                        to agreements entered into and wholly performed in said State, without regard to any conflict of
                        laws principles. You hereby agree that the exclusive jurisdiction and venue for any action, suit
                        or proceeding based upon any matter, claim or controversy arising hereunder or relating hereto
                        shall be in the state or federal courts located in the&nbsp;<strong>Stockholm SE</strong>. You
                        shall not be entitled to any monies in connection with the Master(s) other than as specifically
                        set forth herein. All notices pursuant to this agreement shall be in writing and shall be given
                        by registered or certified mail, return receipt requested (prepaid) at the respective addresses
                        hereinabove set forth or such other address or addresses as may be designated by either party.
                        Such notices shall be deemed given when received. Any notice mailed will be deemed to have been
                        received five (5) business days after it is mailed; any notice dispatched by expedited delivery
                        service will be deemed to be received two (2) business days after it is dispatched. YOU
                        ACKNOWLEDGE AND AGREE THAT YOU HAVE READ THIS AGREEMENT AND HAVE BEEN ADVISED BY US OF THE
                        SIGNIFICANT IMPORTANCE OF RETAINING AN INDEPENDENT ATTORNEY OF YOUR CHOICE TO REVIEW THIS
                        AGREEMENT ON YOUR BEHALF. YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE HAD THE UNRESTRICTED
                        OPPORTUNITY TO BE REPRESENTED BY AN INDEPENDENT ATTORNEY. IN THE EVENT OF YOUR FAILURE TO OBTAIN
                        AN INDEPENDENT ATTORNEY OR WAIVER THEREOF, YOU HEREBY WARRANT AND REPRESENT THAT YOU WILL NOT
                        ATTEMPT TO USE SUCH FAILURE AND/OR WAIVER as a basis to avoid any obligations under this
                        agreement, or to invalidate this agreement or To render this agreement or any part thereof
                        unenforceable. This agreement may be executed in counterparts, each of which shall be deemed an
                        original, and said counterparts shall constitute one and the same instrument. In addition, a
                        signed copy of this agreement transmitted by facsimile or scanned into an image file and
                        transmitted via email shall, for all purposes, be treated as if it was delivered containing an
                        original manual signature of the party whose signature appears thereon and shall be binding upon
                        such party as though an originally signed document had been delivered. Notwithstanding the
                        foregoing, in the event that you do not sign this Agreement, your acknowledgment that you have
                        reviewed the terms and conditions of this Agreement and your payment of the License Fee shall
                        serve as your signature and acceptance of the terms and conditions of this Agreement.
                    </li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button className="license-close-button" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// props: className
const LicenseBox = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    // default text
    return (
        <>
            <button className={props.className}
                    style={{width: props.width, height: props.height}}
                    onClick={() => setModalShow(true)}>
                {props.text}
            </button>

            <VerticallyCenteredModal
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
                        <LicenseBox className="license-button-popular" text="Read License"/>
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
                        <LicenseBox className="license-button" text="Read License"/>
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
                    <LicenseBox className="license-button" text="Read License"/>
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
                        <LicenseBox className="license-button" text="Read License"/>
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
                    <LicenseBox className="license-button" text="Read License"/>
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

export {PriceCards, LicenseBox, VerticallyCenteredModal};
