import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import styles from './styles.module.css';

const App = () => {
  const contactsList = localStorage.getItem('contacts');
  const parsedContactsList = JSON.parse(contactsList);

  const [contacts, setContacts] = useState(() => {
      return parsedContactsList ?? [];
  });
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleCheckUnique = (name) => {
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert(`Contact ${name} is already exist!`);
    return !isExistContact;
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (filter) => setFilterContacts(filter);

  const getVisibleContacts = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filterContacts.toLowerCase()));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div className={styles.phoneBookContainer}>
      <div className={styles.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={handleAddContact} onCheckUnique={handleCheckUnique} />
        </div>
        <div className={styles.contacts}>
          <h2>Contacts</h2>
          <Filter filter={filterContacts} onChange={handleFilterChange} />
          <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
        </div>
      </div>
    );
}

export default App;
