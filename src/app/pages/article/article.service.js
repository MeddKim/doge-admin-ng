(function () {
    'use strict';
    angular.module('JamXin.pages.clients')
        // .service('customerService', customerService)
        // .service('clueService', clueService)
        .service('articleService', articleService);


    // @ngInject
    // customerService.$inject = ['$http', '$q'];
    // clueService.$inject = ['$http', '$q'];
    articleService.$inject = ['$http', '$q'];

    function customerService($http, $q) {
        var customerService = {
            customerList: customerList,
        };

        return customerService;
        function customerList() {
            return $http.get('/app/api/customerList.json');
        }

    }


})();