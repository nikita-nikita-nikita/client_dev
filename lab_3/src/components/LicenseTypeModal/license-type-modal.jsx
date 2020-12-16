import React from 'react';
import {Modal, Button} from "react-bootstrap";

const LicenseTypeModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="track-description-container">
                    4ereshn9
                </div>
                <div className="licenses-container">
                    <div className="license-button-choice mp3-lease">
                        <div>MP3 LEASE</div>
                    </div>
                    <button type="button" className="license-button-choice">
                        <div>WAV LEASE</div>

                    </button>
                    <button type="button" className="license-button-choice tracked-out-lease">
                        <div>TRACKED OUT LEASE</div>
                    </button>
                    <button type="button" className="license-button-choice unlimited-lease">
                        <div>UNLIMITED LEASE</div>
                    </button>
                    <button type="button" className="license-button-choice exclusive-lease">
                        EXCLUSIVE
                    </button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LicenseTypeModal;