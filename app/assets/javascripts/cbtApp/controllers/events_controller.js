// var cbtApp = angular.module('cbtApp');

cbtApp.controller('EventCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.data = {
		description: "I ate too much"
	};

	$scope.getEvents = function() {
		$scope.events = ListEvents.get()
	}


	$scope.listEvents = function() {
		$http.get("/api/events")
			.success(function(data){
				$scope.allEvents = data
			})
	}
	$scope.getEvent = function(existingCbtEvent) {
		$http.get("/api/events/" + existingCbtEvent)
			.success(function(data){
				$scope.ourNewCbtEvent = data
			})
	}

	$scope.createEvent = function(newCbtEvent) {
		$http.post(
			"/api/events.json",
			{
				description: newCbtEvent.description
			}
		)
			.success(function(data, status, headers, config){
				console.log(data)
				$scope.ourNewCbtEvent = data;
			})
			.error(function(data, status, headers, config) {
				console.log("Failure...")
				console.log(data)
			})
	}
} ]);