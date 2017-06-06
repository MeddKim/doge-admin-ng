/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('dashboardCalendar', dashboardCalendar);

    /** @ngInject */
    function dashboardCalendar() {
        return {
            restrict: 'E',
            controller: 'DashboardCalendarCtrl',
            templateUrl: 'app/pages/dashboard/dashboardCalendar/dashboardCalendar.html'
        };
    }
})();