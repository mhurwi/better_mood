var cbtAppRoutes = angular.module('cbtAppRoutes', ['ui.router']);

cbtAppRoutes.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when("", "/");
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
			url: '/new',
			templateUrl: "/api/templates/new_event.html",
		})
		.state('new.description', {
			url: '/description',
			templateUrl: "/api/templates/create_description.html",
			data: {
				activeState: "description"
			}
		})

})
