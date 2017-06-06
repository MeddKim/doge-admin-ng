/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components', [
        'Doge.pages.components.mail',
        'Doge.pages.components.timeline',
        'Doge.pages.components.tree',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'Components',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 100,
                },
            });
    }

})();
