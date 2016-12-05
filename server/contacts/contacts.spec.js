const test = require('tape');
const { getContactById, patchContact, getNextId, addContact, createContact } = require('./contacts');

const fakeContacts = [{id:'1', name:'joe'}, {id:'2', name:'steve'}];


test('getContactById should filter the array by id', assert => {
  const msg = 'returned the contact with id 1';
  assert.deepEquals(getContactById(fakeContacts,'2'), {id:'2', name:'steve'});
  assert.end();
});

test('patchContact should update the contact', assert => {
  const msg = 'contact 2 sould have anme updated to george';
  const target = [{id:'1', name:'joe'}, {id:'2', name:'George'}];
  assert.deepEquals(patchContact(fakeContacts, '2', {name:'George'}),target, msg);
  assert.end();
});

test('create a new id based on exsisting ids', assert => {
  const msg = 'new serial id was created';
  const newId = '3';
  assert.equals(getNextId(fakeContacts), newId , msg);
  assert.end();
});

test('creating a new id should deal with strings', assert => {
  const msg = 'added new id when ids are strings';
  const newId = '3';
  assert.equals(getNextId(fakeContacts), newId , msg);
  assert.end();
});

test('should add a new contact', assert => {
  const msg = 'new contact was added';
  const target = [{id:'1', name:'joe'}, {id:'2', name:'steve'}, {
    id: '3',
    firstName: 'jane',
  }];
  assert.deepEquals(addContact(fakeContacts, {id: '3', firstName:'jane'}), target, msg);
  assert.end();
});

test('create a new contact', assert=> {
  const msg = 'new contact created';
  const target = {
    id: '3',
    firstName: 'jane',
    lastName: '',
    title: '',
    Address1: '',
    City: '',
    State: ''
  };
  assert.deepEqual(createContact({firstName:'jane'}, '3'), target, msg);
  assert.end();

})
