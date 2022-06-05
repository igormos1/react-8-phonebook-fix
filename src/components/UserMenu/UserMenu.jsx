import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@mui/material";

import authOperations from "redux/auth/authOperations.js";


import s from "./UserMenu.module.css";

export const UserMenu = () => {
    
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.user.name);

    return (
        <div className={s.menu}>
            <FaRegUser className={s.icon} />
            <p className={s.name}>Welcome {name}</p>
            <Button
                type="button"
                variant="outlined"
                onClick={() => dispatch(authOperations.logOut())}
            >
                Sign out
            </Button>
        </div>
    );
}