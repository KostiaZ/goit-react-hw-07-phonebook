import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
  };

  return (
    <li id={id} className={s.item}>
      <p>
        {name}............
        {phone}
      </p>
      <button
        className={s.button}
        type="submit"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
