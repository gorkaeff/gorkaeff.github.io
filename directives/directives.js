'use strict';

angular.module('myApp.directives', [])

.directive('menutemplate', function () {
	return {
		controller: 'MenuCtrl',
    	templateUrl: 'views/menu/menu.html'
	};
});