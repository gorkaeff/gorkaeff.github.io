'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.menu',
  'myApp.home',
  'myApp.contact',
  'ui.bootstrap',
  'myApp.directives',
  'pascalprecht.translate'
]).
config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: 'common/lang/locale-',
		suffix: '.json'
	});

	$translateProvider.preferredLanguage('es');

	$routeProvider.otherwise({redirectTo: '/'});
}]);
