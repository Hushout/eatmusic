import React, { FC } from "react";
import './Contact.scss';
import Linka from "../../Components/Linka/Linka";

const Contact: FC = () => {
    return <div className="ContactPage">
        <div className="title">Contact</div>
        <div className="contentContact">
            <div className="leftBox">
                <div className="subTitle">E-MAIL</div>
                <Linka href="mailto:Caoanhlamvn@gmail.com" target="_blank">↗ Caoanhlamvn@gmail.com</Linka>
            </div>
            <div className="rightBox">
                <div className="subTitle">E-MAIL</div>
                <Linka href="mailto:Caoanhlamvn@gmail.com" target="_blank">↗ Caoanhlamvn@gmail.com</Linka>
            </div>
        </div>
    </div>;
};

export default Contact;
