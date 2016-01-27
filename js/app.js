'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.menuCtrl',
	'myApp.homeCtrl',
	'myApp.projectCtrl',
	'myApp.contactCtrl',
	'myApp.menuService',
	'myApp.skillService',
	'myApp.projectService',
	'ui.bootstrap',
	'myApp.directives',
	'pascalprecht.translate'
]).
config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: 'common/lang/locale-',
		suffix: '.json'
	});

	if (navigator.language.substring(0,2) == "es"){
		$translateProvider.preferredLanguage('es');
	} else {
		$translateProvider.preferredLanguage('en');
	}

	$routeProvider.otherwise({redirectTo: '/'});
}]);