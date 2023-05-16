import {Banner} from "../Banner";
import {Outlet} from "react-router-dom";

export function DefaultPage({children}: any) {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    )
}