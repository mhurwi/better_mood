cbtApp.directive('deleteEvent',['$http', function($http){
	return function(scope, elem, attrs) {
		elem.bind ("mousedown", function () {
      $http.delete(
				"/api/events/" + attrs.id
			)
			.success(function(data, status, headers, config) {
				console.log("Successfully deleted the event");
				console.log(data.message)
				elem.parent().remove()
			})
			.error(function(data, status, headers, config) {
				console.log("Error, could not do this.")
			})
    })
	}
}])