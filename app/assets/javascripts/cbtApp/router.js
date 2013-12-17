var cbtAppRoutes = angular.module('cbtAppRoutes', ['ui.router']);

cbtAppRoutes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.when("", "/");
	$urlRouterProvider.when("/new", "/new/instructions");
	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('events', {
			url: '/',
			templateUrl: "/api/templates/events_list.html",
		})
		.state('show', {
			url: '/show/:id',
			templateUrl: "/api/templates/show_event.html",
		})
		.state('new', {
			url: '/new/:id',
			templateUrl: "/api/templates/new_event.html",
			data: {
				step: 0
			},
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

}])
