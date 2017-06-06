(function () {
    'use strict';
    angular.module('Doge.pages.clients')
        .service('customerService', customerService)
        .service('clubService', clubService)
        .service('poolService', poolService);


    // @ngInject
    customerService.$inject = ['$http', '$q'];
    clubService.$inject = ['$http', '$q'];
    poolService.$inject = ['$http', '$q'];

    function customerService($http, $q) {

    }

    function clubService($http, $q) {

    }

    function poolService($http, $q) {

    }


})();