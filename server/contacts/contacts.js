const getContactById = (contacts, id) => {
  return contacts.find(contact => contact.id === id);
};

const patchContact = (contacts, id, updated) => {
  return contacts.map(contact => {
    if (contact.id === id) {
      return Object.assign({}, contact, updated);
    }
    return contact;
  })
};

const getNextId = (contacts) => {
  return (contacts.reduce((prev, curr) => {
    return prev > parseInt(curr.id) ? prev : parseInt(curr.id);
  }, 0) + 1).toString();  // will never be negative
}

const createContact = (newContactPart, newContactId) => {

  return Object.assign({}, {
    id: newContactId,
    firstName: '',
    lastName: '',
    title: '',
    Address1: '',
    City: '',
    State: ''
  },
    newContactPart);
};

const addContact = (contacts, newContact) => {
  return [...contacts, newContact];
};

module.exports = {
  getContactById,
  patchContact,
  getNextId,
  addContact,
  createContact
};

