import toast from 'react-hot-toast';

import { useAddContactMutation } from 'redux/contacts/contactsSlice.js';
import { ContactForm } from "components/ContactForm/ContactForm.jsx";


export const CreateContact = () => {

  const [addContact] = useAddContactMutation();
    
  const handleAddContact = async (values) => {
    try {
      await addContact(values);
      toast.success(`contact "${values.name}" was saved`)
    } catch (error) {
      toast.error('error, contact was not saved')
      console.log(error)
    }
  };
    
  return (
    <>
      <ContactForm onSubmit={handleAddContact} buttonText='Add contact' />
    </>
  );
}
