/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.icons', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui.icons', {
                url: '/icons',
                templateUrl: 'app/pages/ui/icons/icons.html',
                controller: 'IconsPageCtrl',
                title: 'Icons',
                sidebarMeta: {
                    order: 200,
                },
            });
    }

})();
