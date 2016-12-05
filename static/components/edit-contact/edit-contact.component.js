angular.module('contact-app')
  .component('mdEditContact', {
    templateUrl: 'components/edit-contact/edit-contact.template.html',
    controller: function ($stateParams, ContactService) {
      this.getContact = () => {
        return ContactService.getContact($stateParams.id).then(response => {
          this.contact = response.data;
        });
      };
      this.getContact();
    }
  });