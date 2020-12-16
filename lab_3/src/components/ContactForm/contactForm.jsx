import React from "react";
import "./stylesContactForm.scss";
import PlaceHolderOverInput from "./PlaceHolderOverInput";

const ContactForm = () => {

    // todo add validation
    // todo add textarea instead of input message
    return (
        <form className="contact-form">
            <div className="contact-info-block">
                <PlaceHolderOverInput className="name"
                                      name="name"
                                      wrapper="contact-input"
                                      required={true}
                                      text="Name"> </PlaceHolderOverInput>

                <PlaceHolderOverInput className="email"
                                      name="email"
                                      wrapper="contact-input"
                                      required={true}
                                      text="Email"> </PlaceHolderOverInput>
            </div>
            <PlaceHolderOverInput className="subject"
                                  name="subject"
                                  required={true}
                                  text="Subject"> </PlaceHolderOverInput>
            <PlaceHolderOverInput className="message"
                                  name="message"
                                  required={true}
                                  text="Message"> </PlaceHolderOverInput>

            <button type="submit" className="invert-button" >SEND MESSAGE</button>
        </form>
    )
}



export default (ContactForm);
