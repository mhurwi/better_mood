///////////////////////
// Get data from server
cbtApp.directive('listEvents', ['$http', function($http){
	return function(scope, elem, attrs) {
		$http.get("/api/events")
			.success(function(data){
				scope.myEvents = data
			})
		}
	}])

cbtApp.directive('anonymousEvents', ['$http', function($http){
	return function(scope, elem, attrs) {
		$http.get("/api/events/anonymous")
			.success(function(data){
				scope.anonymousEvents = data
			})
	}
}])



///////////////
// CRUD actions
cbtApp.directive('deleteEvent',['$http', '$state','$route', function($http, $state,$route){
	return function(scope, elem, attrs) {
		elem.bind ("mousedown", function () {
      $http.delete(
				"/api/events/" + attrs.id
			)
			.success(function(data, status, headers, config) {
				//ATTENTION: this is messing up the view
				//the app becomes unresponsive and weird
				scope.removeEventData()
				console.log(status)
				console.log("Successfully deleted the event");
			})
			.error(function(data, status, headers, config) {
				console.log("Error, could not do this.")
			})
    })
	}
}])

cbtApp.directive('createEvent', ['$http', '$state', function($http, $state){
	return function(scope, elem, attrs){
		elem.bind("mousedown", function() {
			$http.post(
				"/api/events.json"
			)
			.success(function(data, status, headers, config){
				console.log("Success!")
				console.log(data)
				$state.go('new.description', {"id": data.id})
			})
			.error(function(data, status, headers, config) {
				console.log(data)
				console.log("Failure...")
			})
		})	
	}
}])


/////////////
// Navigation
cbtApp.directive('next', ['$http', '$state', function($http, $state){
	return function(scope, elem, attrs){
		elem.bind("mouseup", function(){
			scope.nextStep();
		})
	}
}])


//////////////////////////
// Feelings Amount buttons
cbtApp.directive('feelingIntensityButton', ['$http', '$state', function($http, $state){
	return function(scope, elem, attrs){
		elem.bind("mousedown", function(){
			scope.feeling["amountBefore"] = attrs["value"]
			elem.parent().children().removeClass("active");
      elem.toggleClass("active");
			scope.updateEvent(scope.cbtEvent);
		})
	}
}])

cbtApp.directive('feelingIntensityButtonAfter', ['$http', '$state', function($http, $state){
	return function(scope, elem, attrs){
		elem.bind("mousedown", function(){
			scope.feeling["amountAfter"] = attrs["value"]
			elem.parent().children().removeClass("active");
      elem.toggleClass("active");
			scope.updateEvent(scope.cbtEvent);
			console.log(scope.cbtEvent.feelings)
		})
	}
}])

cbtApp.directive('feelingIntensityIndicator', function(){
	return function(scope, elem, attrs){
			if(attrs["intensity"] < 3){
				elem.addClass("label label-success");
			} else if(attrs["intensity"] < 5){
				elem.addClass("label label-info");
			} else if(attrs["intensity"] < 7){
				elem.addClass("label label-primary");
			} else if(attrs["intensity"] < 9){
				elem.addClass("label label-warning");
			} else if (attrs["intensity"] < 11){
				elem.addClass("label label-danger");
			}
		}
	})

// cbtApp.directive('go-to-events', ['$state', function($state){
// 	return function(scope, elem, attrs){
// 		elem.bind("mouseup", function(){
// 			console.log("reloading page")
// 			$state.transitionTo('events')
// 			scope.listEvents()

// 		})
// 	}
// }])

