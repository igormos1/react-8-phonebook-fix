import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Navigation.module.css";

export const Navigation = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={s.item}>
                    {isLoggedIn &&
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}
                        >
                            Contacts
                        </NavLink>}
                </li>
            </ul>
        </nav>
    );
}