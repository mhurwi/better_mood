cbtApp.controller('EventsListCtrl', ['$scope', '$http', function($scope, $http) {
	var loadData = function(){
		$http.get("/api/events")
			.success(function(data){
				$scope.allMyEvents = data
			})
		}

	loadData();
	
	}])