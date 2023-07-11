import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";
import { Button, Form } from "react-bootstrap";

function EditContact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { editContact, getOneContact, oneContact } = useContactContext();
  const { id } = useParams();

  useEffect(() => {
    getOneContact(id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(+oneContact.phone);
    }
  }, [oneContact]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }
  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <div>
      <h1>Edit Contact</h1>
      <Form
        className="w-50 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim || !surname.trim() || !phone.trim()) {
            alert("fill all inputs");
            return;
          }
          editContact(id, { name, surname, phone });

          navigate("/");
        }}
      >
        <Form.Control type="text" value={name} onChange={handleChangeName} />
        <Form.Control
          type="text"
          value={surname}
          onChange={handleChangeSurname}
        />
        <Form.Control
          type="number"
          value={phone}
          onChange={handleChangePhone}
        />
        <Button
          variant="dark"
          type="submit"
          className="mx-auto d-block mt-2 px-5"
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default EditContact;
