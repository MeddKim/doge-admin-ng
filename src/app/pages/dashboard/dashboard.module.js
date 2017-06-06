/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/pages/dashboard/dashboard.html',
                title: '仪表盘',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();
