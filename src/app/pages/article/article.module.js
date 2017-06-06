/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.article', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('article', {
                url: '/article',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: '文章',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 10,
                },
            })
            .state('article.list', {
                url: '/list',
                templateUrl: 'app/pages/article/list/articleList.html',
                controller: 'ArticleListCtrl',
                controllerAs: 'vm',
                title: '所有文章',
                sidebarMeta: {
                    order: 10,
                },
            })
            .state('article.create', {
                url: '/create',
                templateUrl: 'app/pages/client/club/club.html',
                controller: 'clubCtrl',
                controllerAs: 'vm',
                title: '撰写文章',
                sidebarMeta: {
                    order: 100,
                },
            })
            .state('article.category',
                {
                    url: '/category',
                    templateUrl: 'app/pages/client/datapool/datapool.html',
                    controller: 'datapoolCtrl',
                    controllerAs: 'vm',
                    title: '分类',
                    sidebarMeta: {
                        order: 200,
                    },
                });
    }
})();
