/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui', [
        'Doge.pages.ui.typography',
        'Doge.pages.ui.buttons',
        'Doge.pages.ui.icons',
        'Doge.pages.ui.modals',
        'Doge.pages.ui.grid',
        'Doge.pages.ui.alerts',
        'Doge.pages.ui.progressBars',
        'Doge.pages.ui.notifications',
        'Doge.pages.ui.tabs',
        'Doge.pages.ui.slider',
        'Doge.pages.ui.panels',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui', {
                url: '/ui',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'UI Features',
                sidebarMeta: {
                    icon: 'ion-android-laptop',
                    order: 200,
                },
            });
    }

})();
