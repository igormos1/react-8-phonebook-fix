import { useSelector } from 'react-redux';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

import s from './ContactList.module.css';

export const ContactList = () => {
    const { data: contacts, isFetching } = useGetContactsQuery();
   
    
    const filter = useSelector(state => state.filter);

    
    const filteredContacts = contacts?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    

    return (
        <>
            {contacts ? isFetching : <p className={s.loading}>Loading...</p>}
            <ul className={s.list}>
                {contacts && filteredContacts.map(({ id, name, number }) => {
                    return (
                        <ContactListItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                        />
                    )
                })}
            </ul>
        </>
    );
}











// import { useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';
// import { useMemo } from 'react';

// import { ContactListItem } from 'components/ContactListItem/ContactListItem.jsx';
// import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

// import s from './ContactList.module.css';

// export const ContactList = () => {

    
//     const filter = useSelector(state => state.filter);

//     const selectFilteredContacts = useMemo(() => {
//         return createSelector(
//             [response => response.data, (_, filter) => filter],
//             (contacts, filter) => {
//                 return (
//                     contacts?.filter(contact =>
//                         contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//                     ) ?? []
//                 );
//             }
//         );
//     }, []);

//     const { filteredContacts, isFetching } = useGetContactsQuery(
//         undefined,
//         {
//             selectFromResult(result) {
//                 return {
//                     ...result,
//                     filteredContacts: selectFilteredContacts(result, filter),
//                 }
//             }
//         }
//     );
    

//     return (
//         <>
//             {filteredContacts ? isFetching : <p className={s.loading}>Loading...</p>}
//             <ul>
//                 {filteredContacts && filteredContacts.map(({ id, name, number }) => {
//                     return (
//                         <ContactListItem
//                             key={id}
//                             id={id}
//                             name={name}
//                             number={number}
//                         />
//                     )
//                 })}
//             </ul>
//         </>
//     );
// }