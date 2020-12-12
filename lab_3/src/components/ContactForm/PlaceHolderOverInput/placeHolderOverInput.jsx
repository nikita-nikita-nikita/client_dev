import React from "react";
import "./stylesPlaceHolderOverInput.scss";

// const PlaceHolderOverInput = (props) => {
//     return (
//         <div className="input-container">
//             <input className={`input-anim ${props.className}`} required={props.required}/>
//             <label className="input-label">{props.label}</label>
//         </div>
//     )
// }

const PlaceHolderOverInput = (props) => {
    return (
        <div className="input-container">
            <input className={`${props.className}`} name={props.name} required={props.required}/>
            <label className={props.labelStyle}>{props.text}</label>
        </div>
    )
}

export default PlaceHolderOverInput;