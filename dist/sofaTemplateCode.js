/**
 * angular-sofa-template-code - v0.1.0 - Thu Feb 05 2015 09:50:45 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
angular.module('sofa.templateCode', [])
    .controller('sofaTemplateController', function() {})
    .directive('sofaTemplateCode', function() {

        'use strict';

        return {
            restrict: 'A',
            controller: 'sofaTemplateController',
            compile: function($element){
                $element.removeAttr('sofa-template-code');
                //ATTENTION: We need to trim() here. Otherwise AngularJS raises an exception
                //later when we want to use the templateCode in a $compile function. 
                //Be aware that we assume a modern browser 
                //that already ships with a trim function.
                //It's easy to secure that with a polyfill.
                var templateCode = $element.parent().html().trim();
                return function(scope, iElement, iAttrs, controller){
                    controller.templateCode = templateCode;
                };
            }
        };
    });


}(sofa, document));
