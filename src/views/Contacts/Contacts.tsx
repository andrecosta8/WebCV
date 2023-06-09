import React, { useContext, useEffect, useState } from 'react';
import ContactCard, {ContactCardProps}  from '../../components/ContactCard/ContactCard';
import { getAllContacts } from '../../services/apiCalls';
import '../Contacts/contacts.scss'
import { DarkModeContext } from '../../contexts/DarkModeContext/DarkModeContext';

const Contacts: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [contacts, setContacts] = useState<ContactCardProps[]>([]);

  useEffect(() => {
    getContactsToDisplay();
  }, []);

  const getContactsToDisplay = async () => {
    try {
      let response = await getAllContacts();
      setContacts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`contacts-page ${darkMode ? "dark" : ""}`}>
      {contacts.map((contact: ContactCardProps) => (
        <ContactCard
          key={contact.id}
          logo={contact.logo}
          type={contact.type}
          info={contact.info}
          url={contact.url}
        />
      ))}
    </div>
  );
};

export default Contacts;
