import React, { FC } from "react";
import './NavBar.scss';
import { Link } from "react-router-dom";

type navBarProps = {
    links: { path: string; name: string; }[]
}

const NavBar: FC<navBarProps> = ({ links }: navBarProps) => {
    
    return <div className="NavBar">
        {links.map(link => {
            return <Link key={link.name} to={link.path}>{link.name}</Link>
        })}
    </div>;
}

export default NavBar;
