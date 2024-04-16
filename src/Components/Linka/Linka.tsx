import React, { FC } from "react";
import './Linka.scss'

interface LinkProps {
    children: string;
    onClick?: () => void;
}

const Linka: FC<LinkProps> = ({ children, onClick = () => null }: LinkProps) =>{
    return (
        <div className="Linka">
            <a href="#" onClick={onClick}>{children}</a>
            <div className="animatedLink"/>
        </div>
    )
}

export default Linka;