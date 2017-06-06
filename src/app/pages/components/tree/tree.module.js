/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components.tree', [])
        .config(routeConfig)
        .config(function () {
            $.jstree.defaults.core.themes.url = true;
            $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
        });

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components.tree', {
                url: '/tree',
                templateUrl: 'app/pages/components/tree/tree.html',
                title: 'Tree View',
                sidebarMeta: {
                    order: 200,
                },
            });
    }

})();
