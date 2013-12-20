cbtApp.controller('EventCtrl', ['CbtEvent','ListEvents', 'ListAnonymousEvents', '$scope', '$http', '$stateParams', '$state', function(CbtEvent, ListEvents, ListAnonymousEvents, $scope, $http, $stateParams, $state) {
	
	//////////////////////////
	// CRUD Methods for Event
	$scope.getEvent = function(eventId) {
		CbtEvent.get({id: eventId}, function(data){
			console.log(data)
			$scope.cbtEvent = data
		})
	}

	$scope.listEvents = function() {
		ListEvents.query(function(data){
			console.log('from listEvents()')
			$scope.myEvents = data
		})
	}

	$scope.listAnonymousEvents = function() {
		ListAnonymousEvents.query(function(data){
			console.log('from listAnonymousEvents()')
			$scope.anonymousEvents = data
		})
	}

	$scope.updateEvent = function(cbtEvent) {
		CbtEvent.update({id: cbtEvent.id}, {event: cbtEvent }, function(data){
			$scope.cbtEvent = data.event;
			console.log(data.event)
		}, function(error){
			return false
		})
	}

	$scope.$watch('myEvents', function(){
		// $scope.listEvents();
	})


}]);