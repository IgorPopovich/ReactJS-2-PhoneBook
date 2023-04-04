import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({contacts, onDelete}) => {
    return <div>
        <ul className={css.todos}>
            {contacts.map(( {id, name, number} ) => (
                <li className={css.item} key={id}>
                    <p className={css.text}>{name}</p>
                    <p className={css.text}>{number}</p>
                    <button onClick={() => onDelete(id)} className={css.delete}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
}

export default ContactList;

