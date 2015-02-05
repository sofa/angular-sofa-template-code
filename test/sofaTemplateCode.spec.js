'use strict';

describe('sofa.templateCode', function () {

    var element, $compile, $rootScope, controller;

    beforeEach(module('sofa.templateCode', function($controllerProvider) {
        $controllerProvider.register('sofaTemplateController', function() {
            controller = this;
        });
    }));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should have the template in scope', function () {
        element = $compile('<div><span sofa-template-code>Hello</span></div>')($rootScope);
        $rootScope.$digest();
        expect(controller.templateCode).toEqual('<span>Hello</span>');
    });
});
