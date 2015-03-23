angular.module('myApp.skillService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('SkillService', function () {
	var skills = [
		{
			name : "AngularJS", 
			value: 8,
			description : "home.description_angularjs"
		},
		{
			name : "Phonegap", 
			value: 8,
			description : "home.description_phonegap"
		},
		{
			name : "Javascript", 
			value: 8,
			description : "home.description_javascript"
		},
		{
			name : "Java", 
			value: 7,
			description : "home.description_java"
		},
		{
			name : "PHP", 
			value: 6,
			description : "home.description_php"
		},
		{
			name : "Ruby On Rails", 
			value: 4,
			description : "home.description_rails"
		}
	];
	
	return {
		getSkills : function (){
			return skills;
		}
	}
});