angular.module('contact-app')
  .component('editContactForm', {
    templateUrl: 'components/edit-contact-form/edit-contact-form.template.html',
    bindings: {
      contact: '=',
      formType: '@'
    },
    controller: function ($state, ContactService) {
      this.reset = () => {
        $state.go('contacts');
      }
      this.save = id => {
        if (this.formType === 'edit') {
          ContactService.updateContact(id, this.contact).then(response => {
            return $state.go('contacts');
          }).catch(function(error){
            console.error('Error saving.', error);
          });
        }
        if (this.formType === 'create') {
          ContactService.createContact(this.contact).then(response => {
            return $state.go('contacts');
          });
        }
      };
    }
  });