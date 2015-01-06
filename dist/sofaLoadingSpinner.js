/**
 * angular-sofa-loading-spinner - v0.0.0 - Tue Jan 06 2015 15:08:23 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa-loading-spinner.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('sofa-loading-spinner.tpl.html',
    '<div class="sofa-loading-spinner"></div>\n' +
    '');
}]);

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
}(angular));
