/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('trafficChart', trafficChart);

    /** @ngInject */
    function trafficChart() {
        return {
            restrict: 'E',
            controller: 'TrafficChartCtrl',
            templateUrl: 'app/pages/dashboard/trafficChart/trafficChart.html'
        };
    }
})();