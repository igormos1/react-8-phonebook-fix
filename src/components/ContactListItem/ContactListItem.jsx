import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Modal } from 'components/Modal/Modal.jsx';
import s from "./ContactListItem.module.css";

export const ContactListItem = ({ id, name, number }) => {

    const [deleteContact, result] = useDeleteContactMutation();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    
    const onDeleteContact = () => deleteContact(id);

    useEffect(() => {
        if (result.isSuccess) {
            toast.success(`contact was deleted`);
        }
        return
      
    }, [result.isSuccess]);
    

    return (
        <li className={s.item}>{name}: {number}
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Button
                    type="button"
                    color="primary"
                    aria-label="edit"
                    onClick={onDeleteContact}
                    disabled={result.isLoading}
                    variant="contained"
                    size="small"
                    className={s.button}
                >
                    <DeleteOutlinedIcon />
                </Button>
             
                <Button
                    type="button"
                    color="primary"
                    aria-label="delete"
                    className={s.button}
                    onClick={toggleModal}
                    variant="contained"
                    size="small"
                >
                    <EditIcon />
                </Button>
            </Box>
            {showModal &&
                <Modal
                    onClose={toggleModal}
                    id={id}
                />}
        </li>
    );
}


ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};