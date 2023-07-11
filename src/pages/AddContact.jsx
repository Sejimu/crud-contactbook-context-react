import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";

function AddContact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { addContacts } = useContactContext();

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
      <h1>Add Contact</h1>
      <Form
        className="w-50 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim || !surname.trim() || !phone.trim()) {
            alert("fill all inputs");
            return;
          }
          addContacts({ name, surname, phone });

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

export default AddContact;
