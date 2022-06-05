import { CreateContact } from "components/CreateContact/CreateContact.jsx";
import { ContactList } from "components/ContactList/ContactList.jsx";
import { Filter } from "components/Filter/Filter.jsx";

import s from "./ContactsPage.module.css";

export default function ContactsPage() {

    return (
        <div className={s.container}>
            <h1 className={s.title}>Create contact</h1>
            <CreateContact />
            <h2 className={s.subtitle}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}