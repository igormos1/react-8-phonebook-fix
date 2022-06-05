// import { MdPhonelinkLock } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";


import s from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Phone book</h1>
            {/* <MdPhonelinkLock className={s.icon}/> */}
            <MdOutlineMenuBook className={s.icon} />
            <p className={s.text}>Please, Sign in or Sign up </p>
        </div>
    );
}