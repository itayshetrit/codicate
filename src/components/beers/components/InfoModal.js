import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import { FlexColumn, ModalData, FancyLink } from '../beersStyle';

const InfoModal = (props) => {

    const [moreDetails, setMoreDetails] = useState(false);

    const handleClose = () => {
        props.onClose(null)
    };

    return (<Modal centered show={true} onHide={handleClose} animation={true}>
        <FlexColumn style={{ background: "white" }}>
            <ModalData>

                <div style={{ fontFamily: "GoogleMedium", textAlign: "center", margin: "10px", fontSize: "1.7rem" }}>
                    {props.data.name}
                </div>
                <div><b>first brewed:</b> {props.data.first_brewed}</div>
                <div><b>tagline:</b> {props.data.tagline}</div>
                <div><b>abv:</b> {props.data.abv}%</div>
                <div><b>ibu:</b> {props.data.ibu}</div>
                <div><b>ebc:</b> {props.data.ebc}</div>

                {moreDetails ? null :
                    <div className="animate__animated animate__headShake  animate__delay-1s"
                        onClick={() => setMoreDetails(!moreDetails)}>
                        <b>
                            <FancyLink>show more...</FancyLink>
                        </b>
                    </div>
                }

                <div>{moreDetails && <>
                    <div><b>description:</b></div>
                    <div>{props.data.description}</div>
                    <div><b>brewers tips:</b></div>
                    <div>{props.data.brewers_tips}</div>
                    <div className="animate__animated animate__headShake  animate__delay-1s"
                        onClick={() => setMoreDetails(!moreDetails)}>
                        <b>
                            <FancyLink>show less...</FancyLink>
                        </b>
                    </div>
                </>}</div>
            </ModalData>
        </FlexColumn>
    </Modal>)
}

export default InfoModal;