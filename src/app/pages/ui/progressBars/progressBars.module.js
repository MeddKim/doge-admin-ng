/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.progressBars', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.progressBars', {
                url: '/progressBars',
                templateUrl: 'app/pages/ui/progressBars/progressBars.html',
                title: 'Progress Bars',
                sidebarMeta: {
                    order: 600,
                },
            });
    }

})();
