/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('dashboardMap', dashboardMap);

    /** @ngInject */
    function dashboardMap() {
        return {
            restrict: 'E',
            controller: 'DashboardMapCtrl',
            templateUrl: 'app/pages/dashboard/dashboardMap/dashboardMap.html'
        };
    }
})();