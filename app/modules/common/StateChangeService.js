angular
    .module('CouchCommerceApp')
    .factory('stateChangeService',['$rootScope', 'screenIndexes', function ($rootScope, screenIndexes) {

            'use strict';

            var self = {};

            $rootScope.$on('$stateChangeSuccess', function(evt, toRoute, toParams, toLocals, fromRoute, fromParams, fromLocals){

                var originalEvent = {
                    evt: evt,
                    toRoute: toRoute,
                    toParams: toParams,
                    toLocals: toLocals,
                    fromRoute: fromRoute,
                    fromParams: fromParams,
                    fromLocals: fromLocals
                };

                //TODO: I don't think it's the correct way to rely on the screenIndex.
                var previousIndex = fromRoute && fromRoute.screenIndex !== undefined ? fromRoute.screenIndex : screenIndexes.unknown,
                    currentIndex = toRoute && toRoute.screenIndex !== undefined ? toRoute.screenIndex : screenIndexes.unknown;

                var eventData = {
                    move: null,
                    previousIndex: previousIndex,
                    currentIndex: currentIndex,
                    originalEvent: originalEvent
                };

                //we are moving between two category listings
                if(previousIndex === 0 && currentIndex === 0){
                    var fromRouteCategory = fromLocals.globals.category;
                    var toRouteCategory = toLocals.globals.category;

                    if(toRouteCategory.parent === fromRouteCategory){
                        eventData.move = 'categoryToChildCategory';
                        $rootScope.$emit('stateChangeService.stateChangeSuccess', eventData);
                    }
                    else if(fromRouteCategory.parent === toRouteCategory){
                        eventData.move = 'categoryToParentCategory';
                        $rootScope.$emit('stateChangeService.stateChangeSuccess', eventData);
                    }
                    else{
                        eventData.move = 'categoryToCategory';
                        $rootScope.$emit('stateChangeService.stateChangeSuccess', eventData);
                    }
                }
                else{
                    eventData.move = screenIndexes[previousIndex] + 'To' + cc.Util.capitalize(screenIndexes[currentIndex]);
                    $rootScope.$emit('stateChangeService.stateChangeSuccess', eventData);
                }
            });

            return self;
        }
    ]);