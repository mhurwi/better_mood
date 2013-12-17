cbtApp.controller('EventCreateCtrl', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {

	///////////
	// Feelings
	$scope.addFeeling = function(cbtEvent){
		cbtEvent.feelings.push({"name": "", "amountBefore": null})
	}
	$scope.removeFeeling = function(cbtEvent, index){
		cbtEvent.feelings.splice(index, 1)
	}

	///////////
	// Thoughts
	$scope.addThought = function(cbtEvent){
		cbtEvent.thoughts.push({"automaticThought":"", "distortions":[{"name":""}], "rationalThought":""})
	}
	$scope.removeThought = function(cbtEvent, index){
		cbtEvent.thoughts.splice(index, 1)
	}

	///////////
	// Distortions
	$scope.addDistortion = function(thought){
		thought.distortions.push({"name":""})
	}
	$scope.removeDistortion = function(thought, index){
		thought.distortions.splice(index, 1)
	}

	//////////////
	// Wizard Code
	console.log("current state: " + $state.current.name)
	console.log("current step: " + $state.current.data.step)

	// We want to get the newly updated event each time
	// that we move to a new step in the wizard
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$scope.getEvent(toParams.id)
	})

	$scope.activeState = $state.current.name;
	$scope.step = $state.current.data.step

	$scope.getCurrentStep = function() {
		return $state.current.data.step;
	}

	$scope.getCurrentStateName = function() {
		return $state.current.name;
	}

	$scope.firstStep = function(){
		return $state.current.data.step == 1;
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