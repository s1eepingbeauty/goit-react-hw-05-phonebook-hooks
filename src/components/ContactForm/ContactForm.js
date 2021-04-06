import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './styles.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd, onCheckUnique }) => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isValidatedForm = validateForm();

    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, number });
    resetForm();
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  const resetForm = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

    return (
      <form className={styles.contactForm} onSubmit={handleSubmitForm}>
        <input
          className={styles.contactFormName}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
        />
        <br />
        <input
          className={styles.contactFormNumber}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeForm}
        />
        <br />
        <button className={styles.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
}

export default ContactForm;
