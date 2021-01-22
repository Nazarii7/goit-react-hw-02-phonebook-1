import React from 'react';

import PropTypes from 'prop-types';

import './ContactList.css';

const ContactListItem = ({name, number, onClickRemove}) => {
    return (
        <li className="ContactListItem">
            <p>{name}: {number}</p>
            <button type="button" className="ContactsList-button" onClick={onClickRemove}>Delete</button>
        </li>
    )
}

const ContactList = ({filteredContacts, onRemove}) => {
    return (
        filteredContacts.length > 0 && (
            <ul className="ContactsList">
                {filteredContacts.map(({id, name, number}) => (
                    <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
                ))}
            </ul>
        )
    )
}

export default ContactList;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onRemove: PropTypes.func.isRequired,
}
