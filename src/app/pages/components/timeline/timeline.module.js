/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components.timeline', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components.timeline', {
                url: '/timeline',
                templateUrl: 'app/pages/components/timeline/timeline.html',
                title: 'Timeline',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 100,
                },
            });
    }
})();