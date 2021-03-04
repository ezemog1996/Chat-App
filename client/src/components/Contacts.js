import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../utils/Contexts/ContactsProvider';

function Contacts() {
    const { contacts } = useContacts();
    return (
        <ListGroup variant="flush">
            {contacts.map(contact => {
                return (
                    <ListGroup.Item key={contact.id}>
                        {contact.name}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}

export default Contacts