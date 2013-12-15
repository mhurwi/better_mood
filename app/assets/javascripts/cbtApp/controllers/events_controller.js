// var cbtApp = angular.module('cbtApp');

cbtApp.controller('EventCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.data = {
		description: "I ate too much"
	};


	//////////////////////////
	// CRUD Methods for Event
	$scope.getEvents = function() {
		$scope.events = ListEvents.get()
	}


	$scope.listEvents = function() {
		$http.get("/api/events")
			.success(function(data){
				$scope.allEvents = data
			})
	}
	$scope.getEvent = function(eventId) {
		$http.get("/api/events/" + eventId)
			.success(function(data){
				$scope.ourNewCbtEvent = data
			})
	}

	$scope.createEvent = function(cbEvent) {
		$http.post(
			"/api/events.json",
			{
				description: cbtEvent.description
			}
		)
			.success(function(data, status, headers, config){
				console.log(data)
				$scope.ourNewCbtEvent = data;
			})
			.error(function(data, status, headers, config) {
				console.log("Failure...")
			})
	}

	$scope.destroyEvent = function(eventId) {
		$http.delete(
			"/api/events/" + eventId
		)
		.success(function(data, status, headers, config) {
			console.log("Successfully deleted the event");
			console.log(data.message)
			$scope.listItem.remove()
		})
	}
} ]);