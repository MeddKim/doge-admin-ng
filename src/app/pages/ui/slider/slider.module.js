/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.slider', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.slider', {
                url: '/slider',
                templateUrl: 'app/pages/ui/slider/slider.html',
                title: 'Sliders',
                sidebarMeta: {
                    order: 1000,
                },
            });
    }

})();
