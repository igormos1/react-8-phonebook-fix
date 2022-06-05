import { Navigation } from "components/Navigation/Navigation.jsx";
import { useSelector } from "react-redux";

import { AuthNavigation } from "components/AuthNavigation/AuthNavigation";
import { UserMenu } from "components/UserMenu/UserMenu";

import s from "./AppBar.module.css";

export const AppBar = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </header>
    );
}