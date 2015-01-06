'use strict';

describe('sofa.loadingSpinner', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.loadingSpinner'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should display loading spinner', function () {
        element = $compile('<sofa-loading-spinner></sofa-loading-spinner>')($rootScope);
        $rootScope.$digest();
        expect(element.hasClass('sofa-loading-spinner')).toBe(true);
    });
});
