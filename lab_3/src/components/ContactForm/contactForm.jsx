import React from "react";
import "./stylesContactForm.scss";
import PlaceHolderOverInput from "./PlaceHolderOverInput";

const ContactForm = () => {
    // todo add validation
    // todo add textarea instead of input message
    return (
        <form className="contact-form">
            <div className="contact-info-block">
                <div className="contact-input input-container">
                    <input className="name" name="name" required/>
                    <label>Name</label>
                </div>
                <div className="contact-input input-container">
                    <input className="email" name="email" required/>
                    <label>Email</label>
                </div>
            </div>
            <div className="input-container">
                <input className="subject" name="subject" required/>
                <label>Subject</label>
            </div>
            <div className="input-container">
                <input className="message" name="message" required />
                <label>Message</label>
            </div>
            <button type="submit" className="invert-button" >SEND MESSAGE</button>
        </form>
    )
}

export default ContactForm;
