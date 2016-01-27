angular.module('myApp.projectService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('ProjectService', function ($http) {	
	return {
		getProjects : function(){
			return $http.get('services/projects.json');
		}
	}
});