import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";

function ContactListItem({ item }) {
  const navigate = useNavigate();
  const { deleteContact } = useContactContext();
  return (
    <ListGroup.Item>
      <span className="mx-4 display-6"> {item.name}</span>
      <span className="mx-4 display-6">{item.surname}</span>
      <span className="mx-4 display-6 text-success">{item.phone}</span>
      <div className="mt-3">
        <Button className="mx-3" onClick={() => navigate(`/edit/${item.id}`)}>
          edit
        </Button>
        <button
          className="btn btn-danger mx-3"
          onClick={() => deleteContact(item.id)}
        >
          delete
        </button>
      </div>
    </ListGroup.Item>
  );
}

export default ContactListItem;
