/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('popularApp', popularApp);

    /** @ngInject */
    function popularApp() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/popularApp/popularApp.html'
        };
    }
})();