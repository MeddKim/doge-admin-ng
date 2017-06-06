/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.notifications', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.notifications', {
                url: '/notifications',
                templateUrl: 'app/pages/ui/notifications/notifications.html',
                controller: 'NotificationsPageCtrl',
                title: 'Notifications',
                sidebarMeta: {
                    order: 700,
                },
            });
    }

})();
