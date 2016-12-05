angular.module('contact-app', ['ui.router'])
  .config(function ($stateProvider) {
    var states = [
      {
        name: 'contacts',
        url: '/contacts',
        component: 'mdContacts'
      },
      {
        name: 'edit-contacts',
        url: '/contacts/edit/:id',
        component: 'mdEditContact'
      },
      {
        name: 'add-contact',
        url: '/contacts/add',
        component: 'mdAddContact'
      },
      {
        name: 'home',
        url: '/',
        component: 'mdHome'
      }
    ];
    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  })
  .component('mdMain', {
    templateUrl: './mainTemplate.html',
    controllerAs: 'vm',
    controller: function ($http) {
      var vm = this;
      vm.getAllContacts = $http.get('/what').then(function (response) {
        vm.contacts = response.data;
      });
      vm.viewDetails = function (contact) {
        alert('your contacts name is ' + contact.firstName);
      }
    }
  });