/**
 * @sofadoc overview
 * @name sofa.loadingSpinner
 * @package angular-sofa-loading-spinner
 * @distFile dist/sofaLoadingSpinner.js
 *
 * @description
 * `sofa.loadingSpinner` Angular module.
 */
angular.module('sofa.loadingSpinner', [
    'sofa-loading-spinner.tpl.html'
])
/**
 * @sofadoc directive
 * @name sofa.loadingSpinner.directive:sofaLoadingSpinner
 * @restrict E
 *
 * @description
 *
 * This directive helps indicating that an asynchronous request is happening and
 * shows a loading animation accordingly.
 */
.directive('sofaLoadingSpinner', function () {

    'use strict';

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'sofa-loading-spinner.tpl.html'
    };
});
