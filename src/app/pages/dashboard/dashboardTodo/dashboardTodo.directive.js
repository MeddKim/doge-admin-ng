/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('dashboardTodo', dashboardTodo);

    /** @ngInject */
    function dashboardTodo() {
        return {
            restrict: 'EA',
            controller: 'DashboardTodoCtrl',
            templateUrl: 'app/pages/dashboard/dashboardTodo/dashboardTodo.html'
        };
    }
})();