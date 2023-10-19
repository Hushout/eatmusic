import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
    children: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick = () => null }: ButtonProps) => {
    return (
        <div className="Button" onClick={onClick}>
                {children}
            <span>
                <span>{children}</span>
                <span>{children}</span>
            </span>
        </div>
    );
}

export default Button;
