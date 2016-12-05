const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3000));

const {
  getContactById,
  patchContact,
  getNextId,
  addContact,
  createContact
} = require('./server/contacts/contacts');

const bodyParser = require('body-parser');

const fs = require('fs');

const CONTACTS_DB = './server/data/contacts.json';
const CONTACTS_DB_ORIGINAL = './server/data/contacts_original.json';

app.use(express.static('./static'));
app.use(bodyParser.json());

app.get('/contacts', function (req, res) {
  let data = fs.readFileSync(CONTACTS_DB);
  res.json(JSON.parse(data));
});

app.post('/contacts', function (req, res) {
  let data = fs.readFileSync(CONTACTS_DB);
  const _newContact = createContact(req.body, getNextId(JSON.parse(data)));
  fs.writeFile(CONTACTS_DB,
    JSON.stringify(addContact(JSON.parse(data), _newContact)),
    function (err) {
      if (err) {
        console.error('Error adding new contact', err);
      }
    });
  res.json(_newContact);
});

app.get('/contacts/:id', function (req, res) {
  let data = fs.readFileSync(CONTACTS_DB);
  res.json(getContactById(JSON.parse(data), req.params.id));
});

app.put('/contacts/:id', function (req, res) {
  let data = fs.readFileSync(CONTACTS_DB);
  fs.writeFile(CONTACTS_DB,
    JSON.stringify(patchContact(JSON.parse(data), req.params.id, req.body)),
    function (err) {
      if (err) {
        console.error('Error saving contact.', err);
      }
      data = fs.readFileSync(CONTACTS_DB);
    });
  res.json(getContactById(JSON.parse(data), req.params.id));
});

app.listen(app.get('port'),() => {
  console.log('contacts app running on port ', app.get('port'));
});
