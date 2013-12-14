cbtApp.controller('EventCreateCtrl', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {

	console.log("current state: " + $state.current.name)
	console.log("step: " + $state.current.data.step)

	$scope.activeState = $state.current.name;
	$scope.step = $state.current.data.step

	$scope.getCurrentStep = function() {
		return $state.current.data.step;
	}

	$scope.firstStep = function(){
		return $state.current.data.step == 0;
	}

	$scope.lastStep = function(){
		return $state.current.data.step == 7;
	}

	$scope.goToStep = function(desired_step){
		if(desired_step == 0){
			$state.transitionTo('new')
		} else if(desired_step == 1) {
			$state.go('new.description')
		} else if(desired_step == 2) {
			$state.go('new.feelingsBefore')
		} else if(desired_step == 3) {
			$state.go('new.automaticThoughts')
		} else if(desired_step == 4) {
			$state.go('new.distortions')
		} else if(desired_step == 5) {
			$state.go('new.rationalThoughts')
		} else if(desired_step == 6) {
			$state.go('new.feelingsAfter')
		} else if(desired_step == 7) {
			$state.go('new.review')
		}
	};

	$scope.previousStep = function(){
		$scope.goToStep($state.current.data.step - 1)
	}
	$scope.nextStep = function(){
		$scope.goToStep($state.current.data.step + 1)
	}

}])