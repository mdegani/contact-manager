angular.module('contact-app')
  .component('mdContactCard', {
    bindings: {
      contact: '=',
      editFunction: '='
    },
    controller: function ($state) {
      this.edit = function (id) {
        $state.go('edit-contacts', { id });
      }
    },
    templateUrl: 'components/contact-card/contact-card.component.html'
  })