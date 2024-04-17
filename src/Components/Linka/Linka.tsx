import React, { FC } from "react";
import './Linka.scss'

interface LinkProps {
    children: string;
    onClick?: () => void;
    href?: string;
    target?: string;
}

const Linka: FC<LinkProps> = ({ children, onClick = () => null, href = "#",target = "_self" }: LinkProps) =>{
    return (
        <div className="Linka">
            <a href={href} onClick={onClick} target={target}>{children}</a>
            <div className="animatedLink"/>
        </div>
    )
}

export default Linka;