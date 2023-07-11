import React, { useEffect } from "react";
import { useContactContext } from "../contexts/ContactContext";
import { ListGroup } from "react-bootstrap";
import ContactListItem from "./ContactListItem";

function ContactList() {
  const { contacts, getContacts } = useContactContext();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1>ContactList</h1>
      <ListGroup>
        {contacts.map((item) => (
          <ContactListItem key={item.id} item={item} />
        ))}
      </ListGroup>
    </div>
  );
}

export default ContactList;
