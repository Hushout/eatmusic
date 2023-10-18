import React, { FC, ReactNode } from "react";
import NavBar from "../../Components/NavBar/NavBar";

interface Props {
    children: ReactNode,
    paths: { path: string; name: string; icon?: FC }[]
}

const Layout: FC<Props> = (props: Props) => {
    const { children, paths } = props;
    return <div>
        <header>
            <NavBar paths={paths} />
        </header>
        <div className="contentLayout">
            {children}
        </div>
        <footer>
        </footer>
    </div>;
}

export default Layout;
