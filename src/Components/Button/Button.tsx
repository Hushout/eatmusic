import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
    children: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick = () => null }: ButtonProps) => {
    return (
        <div className="Button">
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    );
}

export default Button;
