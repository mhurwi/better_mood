cbtApp.controller('EventCreateCtrl', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {

	console.log("current state: " + $state.current.name)

	$scope.activeState = $state.current.name;
	
}])