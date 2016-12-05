angular.module('contact-app')
  .component('mdAddContact', {
    templateUrl: 'components/add-contact/add-contact.template.html',
      controller: function() {
        this.contact = {
          firstName: '',
          lastName: '',
          title: '',
          Address1: '',
          City: '',
          State: ''
        }
      }
  });