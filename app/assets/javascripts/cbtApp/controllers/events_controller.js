// var cbtApp = angular.module('cbtApp');

cbtApp.controller('EventCtrl', ['$scope', function($scope) {
	$scope.data = {
		description: "I ate too much"
	};

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