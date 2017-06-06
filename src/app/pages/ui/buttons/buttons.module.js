/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.buttons', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.buttons', {
                url: '/buttons',
                templateUrl: 'app/pages/ui/buttons/buttons.html',
                controller: 'ButtonPageCtrl',
                title: 'Buttons',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();
