import React, { FC, ReactNode } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WheelScroll from "../../Components/WheelScroll/WheelScroll";
import Ticker from "../../Components/Ticker/Ticker";

interface LayoutProps {
    children: ReactNode,
    paths: { path: string; name: string; icon?: FC }[]
}

const Layout: FC<LayoutProps> = ({ children, paths }: LayoutProps) => {
    return <div>
        <header>
            <NavBar paths={paths} />
        </header>
        <WheelScroll />
        <div className="contentLayout">
            {children}
        </div>
        <Ticker />
        <footer>
        </footer>
    </div>;
}

export default Layout;
