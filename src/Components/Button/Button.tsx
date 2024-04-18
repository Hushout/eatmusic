import React, { FC, useState } from "react";
import "./Button.scss";

interface ButtonProps {
    children?: string;
    onClick?: () => void;
    boxStyle?: {};
    fontStyle?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick = () => null, boxStyle = {}, fontStyle = "white" }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const spanStyle = {
        color: isHovered ? fontStyle : 'transparent'
    };
    const contentButtonStyle = {
        color: isHovered ? 'transparent' : fontStyle
    };
    return (
        <div className="Button" onClick={onClick} style={boxStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="contentButton" style={contentButtonStyle}>
                {children}
            </div>
            <span>
                <span style={spanStyle}>{children}</span>
                <span style={spanStyle}>{children}</span>
            </span >
        </div >
    );
}

export default Button;
