angular.module('contact-app')
  .service('ContactService', function ($http) {
    this.getContacts = () => {
      return $http.get('/contacts')
    };
    this.getContact = id => {
      return $http.get('/contacts/' + id);
    };
    this.updateContact = (id, contact) => {
      return $http.put('/contacts/' + id, contact);
    };
    this.createContact = (contact) => {
      return $http.post('/contacts/', contact);
    };
  });