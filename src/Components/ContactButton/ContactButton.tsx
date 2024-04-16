import React, { FC } from "react";
import Button from "../Button/Button";

const ContactButton: FC = () => {
    return <React.Fragment>
        <Button boxStyle={{backgroundColor:"#B451FC"}} fontStyle="#99fc51">
            Contact me
        </Button>
    </React.Fragment>;
}

export default ContactButton;
