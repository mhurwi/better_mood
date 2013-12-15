cbtApp.controller('EventCtrl', ['CbtEvent', '$scope', '$http', '$stateParams', function(CbtEvent, $scope, $http, $stateParams) {
	
	//////////////////////////
	// CRUD Methods for Event
	$scope.getEvent = function(eventId) {
		CbtEvent.get({id: eventId}, function(data){
			console.log(data)
			$scope.cbtEvent = data
		})
	}

	$scope.updateEvent = function(cbtEvent) {
		CbtEvent.update({id: cbtEvent.id}, {event: cbtEvent }, function(data){
			$scope.cbtEvent = data.event;
		}, function(error){
			return false
		})
	}



}]);