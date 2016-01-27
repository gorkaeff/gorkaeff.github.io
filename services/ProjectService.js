angular.module('myApp.projectService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('ProjectService', function () {

	var projects = [
		{}
	];
	
	return {
		getProjects : function(){
			return projects;
		}
	}
});