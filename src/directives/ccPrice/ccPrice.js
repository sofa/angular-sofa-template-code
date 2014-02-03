angular.module('sdk.directives.ccPrice', ['src/directives/ccPrice/cc-price.tpl.html']);

/**
 * Creates pricing markup for prices and special prices
 *
 *
 */
angular.module('sdk.directives.ccPrice')
    .directive('ccPrice', function() {

        'use strict';

        return {
            restrict: 'E',
            replace: true,
            scope: {
                product: '='
            },
            templateUrl: 'src/directives/ccPrice/cc-price.tpl.html',
            link: function(scope, element, attrs) {

                scope.price       = scope.product.price;
                scope.oldPrice    = scope.product.priceOld;
                scope.hasOldPrice = scope.product.hasOldPrice();

            }
        };
    });
