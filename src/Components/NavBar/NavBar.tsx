import React, { FC } from "react";
import './NavBar.scss';
import { Link } from "react-router-dom";

interface navBarProps {
    paths: { path: string; name: string; icon?: FC }[]
}

const NavBar: FC<navBarProps> = ({ paths }: navBarProps) => {

    return <div className="NavBar">
        {paths.map(path => {
            return <Link key={path.name} to={path.path}>{path.icon ? <path.icon /> : path.name}</Link>
        })}
    </div>;
}

export default NavBar;
