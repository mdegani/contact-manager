angular.module('contact-app')
  .component('mdContactList', {
    templateUrl: 'components/contact-list/contact-list.template.html',
    bindings: {
      contacts: '=',
      filterText: "="
    },
    controller: function () { }
  });