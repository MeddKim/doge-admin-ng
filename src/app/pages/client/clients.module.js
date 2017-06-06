/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.clients', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('clients', {
                url: '/clients',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: '客户管理',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0,
                },
            })
            .state('clients.customer', {
                url: '/customer',
                templateUrl: 'app/pages/client/customer/customer.html',
                controller: 'customerCtrl',
                controllerAs: 'vm',
                title: '客户',
                sidebarMeta: {
                    order: 0,
                },
            })
            .state('clients.club', {
                url: '/club',
                templateUrl: 'app/pages/client/club/club.html',
                controller: 'clubCtrl',
                controllerAs: 'vm',
                title: '线索',
                sidebarMeta: {
                    order: 100,
                },
            })
            .state('clients.datapool',
                {
                    url: '/datapool',
                    templateUrl: 'app/pages/client/datapool/datapool.html',
                    controller: 'datapoolCtrl',
                    controllerAs: 'vm',
                    title: '公海池',
                    sidebarMeta: {
                        order: 200,
                    },
                });
    }
})();
