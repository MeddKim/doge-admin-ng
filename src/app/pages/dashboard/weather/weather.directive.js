/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('weather', weather);

    /** @ngInject */
    function weather() {
        return {
            restrict: 'EA',
            controller: 'WeatherCtrl',
            templateUrl: 'app/pages/dashboard/weather/weather.html'
        };
    }
})();