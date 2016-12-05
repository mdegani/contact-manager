angular.module('contact-app')
  .component('mdContacts', {
    templateUrl: 'components/contacts/contacts.html',
    controller: function (ContactService, $state) {
      this.contacts = [];
      this.showAsList = true;
      this.getContacts = () => {
        return ContactService.getContacts().then(response => {
          this.contacts = response.data;
        });
      };
      this.$onInit = () => {
        return this.getContacts();
      };
      this.toggleView = () => {
        this.showAsList = !this.showAsList;
      };
      this.addContact = () => {
        $state.go('add-contact');
      };
    }
  });