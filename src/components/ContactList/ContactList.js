import styles from './styles.module.css';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactListItem}>
      <button className={styles.removeBtn} onClick={() => onDelete(id)}>
        X
      </button>
      {name}: {number}
    </li>
  );
};

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
