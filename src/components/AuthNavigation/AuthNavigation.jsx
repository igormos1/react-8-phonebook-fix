import { NavLink } from "react-router-dom";

import s from "./AuthNavigation.module.css";

export const AuthNavigation = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink
                        to="/register"
                        className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}
                    >
                        Sign up
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}
                    >
                        Sign in
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}