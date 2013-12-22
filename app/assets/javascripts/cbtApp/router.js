var cbtAppRoutes = angular.module('cbtAppRoutes', ['ui.router']);

cbtAppRoutes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// $urlRouterProvider.when("", "/new");
	// $urlRouterProvider.when("/new", "/new");
	// // For any unmatched url, send to /route1
	// $urlRouterProvider.otherwise("/new");

	$stateProvider
		.state('new', {
			url: '/:id',
			templateUrl: "/api/templates/new_event.html",
			data: {
				step: 0
			}
		})
		.state('new.description', {
			url: '/description/',
			templateUrl: "/api/templates/new.description.html",
			data: {
				step: 1
			}
		})
		.state('new.feelingsBefore', {
			url: '/feelingsBefore',
			templateUrl: "/api/templates/new.feelingsBefore.html",
			data: {
				step: 2
			}
		})
		.state('new.automaticThoughts', {
			url: '/automaticThoughts',
			templateUrl: "/api/templates/new.automaticThoughts.html",
			data: {
				step: 3
			}
		})
		.state('new.distortions', {
			url: '/distortions',
			templateUrl: "/api/templates/new.distortions.html",
			data: {
				step: 4
			}
		})
		.state('new.rationalThoughts', {
			url: '/rationalThoughts',
			templateUrl: "/api/templates/new.rationalThoughts.html",
			data: {
				step: 5
			}
		})
		.state('new.feelingsAfter', {
			url: '/feelingsAfter',
			templateUrl: "/api/templates/new.feelingsAfter.html",
			data: {
				step: 6
			}
		})
		.state('new.review', {
			url: '/review',
			templateUrl: "/api/templates/new.review.html",
			data: {
				step: 7
			}
		})
		.state('new.finish', {
			url: '/finish',
			templateUrl: "/api/templates/new.finish.html"
		})

}])
