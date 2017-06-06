/**
 * Animated load block
 */
(function () {
    'use strict';

    angular.module('Doge.pages.clients')
        .directive('cbSelect', cbSelect);

    /** @ngInject */
    function cbSelect() {
        return {
            require: '^stTable',
            template: '<div class="checkbox"><label class="custom-checkbox"><input type="checkbox"><span></span></label></div>',
            scope: {
                row: '=csSelect'
            },
            link: function (scope, element, attr, ctrl) {

                element.bind('change', function (evt) {
                    scope.$apply(function () {
                        ctrl.select(scope.row, 'multiple');
                    });
                });

                scope.$watch('row.isSelected', function (newValue, oldValue) {
                    if (newValue === true) {
                        element.parent().addClass('st-selected');
                    } else {
                        element.parent().removeClass('st-selected');
                    }
                });
            }
        };
    }

})();