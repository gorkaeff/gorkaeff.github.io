angular.module('myApp.menuService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('MenuService', function () {
	var staticVarMenu = {
		urlProject : "https://github.com/gorkaeff/gorkaeff.github.io",
		titleProject : "menu.titleProject",
		menu : [
			{url : "#/", tag : "menu.home"},
			{url : "#/contact", tag : "menu.contact"}
		]
	};
	
	return {
		getMenu : function(){
			return staticVarMenu;
		}
	}
});