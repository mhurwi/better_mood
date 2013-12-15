// var cbtApp = angular.module('cbtApp');

cbtApp.controller('EventCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	
	$scope.cbtEvent = {}

	//////////////////////////
	// CRUD Methods for Event
	$scope.listEvents = function() {
		$http.get("/api/events")
			.success(function(data){
				$scope.allEvents = data
			})
	}
	$scope.getEvent = function(eventId) {
		$http.get("/api/events/" + eventId)
			.success(function(data){
				$scope.cbtEvent = data
			})
	}


} ]);