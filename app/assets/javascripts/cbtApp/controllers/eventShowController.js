cbtApp.controller('EventShowCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	var loadData = function(){
		$http.get("/api/events/" + $stateParams["id"])
			.success(function(data){
				$scope.event_data = data
				$scope.userCanDeleteEvent = data["current_user_is_owner"]
				console.log(data)
			})
		}

	loadData();
	
	}])