import React, { FC, useEffect, useState } from "react";
import './NavBar.scss';
import { Link } from "react-router-dom";

interface NavBarProps {
    paths: { path: string; name: string; icon?: FC }[]
}

const NavBar: FC<NavBarProps> = ({ paths }: NavBarProps) => {
    const [hideNavBar, setHideNavBar] = useState<boolean>(false);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setHideNavBar(true);
            } else {
                setHideNavBar(false);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return <div className={`NavBar ${hideNavBar ? "hide" : ""}`}>
        {paths.map(path => {
            return <Link key={path.name} className={path.name + "Link"} to={path.path}>{path.icon ? <path.icon /> : path.name}</Link>
        })}
    </div>;
}

export default NavBar;
