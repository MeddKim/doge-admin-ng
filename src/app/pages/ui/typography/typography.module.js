/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.typography', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.typography', {
                url: '/typography',
                templateUrl: 'app/pages/ui/typography/typography.html',
                title: 'Typography',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

})();
