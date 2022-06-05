import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";

import { useGetContactsQuery, useUpdateContactMutation } from "redux/contacts/contactsSlice.js";
import { ContactForm } from "components/ContactForm/ContactForm.jsx";
import s from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, id }) => {
    
    const { data: contacts } = useGetContactsQuery();
    const [updateMaterial, result] = useUpdateContactMutation();

    const contact = contacts.find(contact => contact.id === id);

    
    
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    });

    
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };
    

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const handleUpdateContact = async fields => {
        try {
            await updateMaterial({ id: contact.id, ...fields })
            onClose();
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (result.isSuccess) {
            toast.success(`changes was saved`);
        }
        return
      
    }, [result.isSuccess]);


    return createPortal(
        <div className={s.Overlay}
            onClick={handleBackdropClick}>
            <div className={s.Modal}>
                {contacts && (
                    <button
                        onClick={onClose}
                        type="button"
                        className={s.btnClose}><MdClose className={s.icon} /></button>
                )}
                {contacts && (
                    <ContactForm
                        initialValues={{ name: contact.name, number: contact.number }}
                        onSubmit={handleUpdateContact}
                        buttonText='Save' />
                )}
            </div>
        </div>,
        modalRoot
    );
}


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};