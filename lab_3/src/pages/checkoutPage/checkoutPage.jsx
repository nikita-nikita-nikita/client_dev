import React from "react";
import Basket from "../../components/Basket";

const CheckoutPage = ({tracks, instance, selectedTrack, setSelectedTrack}) => {
    return (
        <Basket tracks={tracks} instance={instance}
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}/>
    )
}

export default CheckoutPage
