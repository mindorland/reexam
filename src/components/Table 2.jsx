import React, { useState } from "react";
import "./CSS/Table.css";
import data from "../mock-data.json";
import { nanoid } from "nanoid";
import Parse from "parse/dist/parse.min.js";

function Table() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    item: "",
    quantity: "",
    unit: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("item");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };

    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      item: addFormData.item,
      quantity: addFormData.quantity,
      unit: addFormData.unit,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.item}</td>
              <td>{contact.quantity}</td>
              <td>{contact.unit}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAddFormSubmit}>
        <table>
          <tr>
            <td>
              <input
                type="type"
                name="item"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="quantity"
                required="required"
                placeholder="quantity"
                onChange={handleAddFormChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="unit"
                required="required"
                placeholder="Enter a unit..."
                onChange={handleAddFormChange}
              />
            </td>

            <td>
              <button type="submit">Add</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Table;
