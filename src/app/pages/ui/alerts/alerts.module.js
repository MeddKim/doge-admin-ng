/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.alerts', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.alerts', {
                url: '/alerts',
                templateUrl: 'app/pages/ui/alerts/alerts.html',
                title: 'Alerts',
                sidebarMeta: {
                    order: 500,
                },
            });
    }

})();
