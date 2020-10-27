import React from 'react';

import { Sticky } from './contactUsStyle';

import facebook from '../../../assets/media/facebook.svg';
import email from '../../../assets/media/email.svg';
import web from '../../../assets/media/web1.svg';

const ContactUs = () => {
    return (
        <Sticky className="animated animate__fadeInDownBig slow">
            <a target={"__blank"} href="https://www.facebook.com/codicate/"><img src={facebook} width="25" alt="facebook" /></a>
            <a target={"__blank"} href={"mailto:hello@codicate.com"}><img src={email} width="25" alt="email" /></a>
            <a style={{ marginBottom: "0px" }} target={"__blank"} href="https://www.codicate.com/"><img src={web} width="25" alt="web" /></a>
        </Sticky>
    )
}
export default ContactUs;