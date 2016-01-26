angular.module('myApp.skillService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('SkillService', function () {

	var links = [
		{
			url : "https://play.google.com/store/apps/developer?id=MyG+Apps",
			tag : "home.android_account",
			classIcon : "fa fa-android fa-2x"
		},
		{
			url : "https://itunes.apple.com/es/artist/marcos-luqui/id960990562",
			tag : "home.apple_account",
			classIcon : "fa fa-apple fa-2x"
		},
		{
			url : "https://github.com/gorkaeff",
			tag : "home.github_account",
			classIcon : "fa fa-github fa-2x"
		},
		{
			url : "https://es.linkedin.com/in/gorka-jusu%C3%A9-martiarena-b584b230",
			tag : "home.linkedin_account",
			classIcon : "fa fa-linkedin fa-2x"
		},
		{
			url : "http://myg.herokuapp.com",
			tag : "home.web_myg_account",
			classIcon : "fa fa-link fa-2x"
		},
		{
			url : "http://informatico.hol.es",
			tag : "home.web_personal_account",
			classIcon : "fa fa-link fa-2x"
		}
	];
	
	return {
		getSocialLinks : function (){
			return links;
		}
	}
});
