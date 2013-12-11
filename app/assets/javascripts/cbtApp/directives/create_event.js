var cbtApp = angular.module('cbtApp');

cbtApp.directive('create', function() {
	return {
		restrict: "E",
		templateUrl: "/api/templates/create_description.html",
	}
})