angular.module('contact-app')
  .component('mdContactGrid', {
    templateUrl: 'components/contact-grid/contact-grid.template.html',
    bindings: {
      contacts: "=",
      filterText: "="
    },
    controller: function ($state) {
      this.edit = id => {
        $state.go('edit-contacts', { id });
      }
    }
  });