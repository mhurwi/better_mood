var cbtAppRoutes = angular.module('cbtAppRoutes', ['ui.router']);

cbtAppRoutes.config(function($stateProvider, $urlRouterProvider){
// 	$urlRouterProvider.when("", "/events/list");
// 	$urlRouterProvider.when("/", "/events/list");

// 	// For any unmatched url, send to /route1
// 	$urlRouterProvider.otherwise("/events/list");

	$stateProvider
		.state('events', {
			url: '/',
			templateUrl: "/api/templates/events_list.html",
			onEnted: function() { console.log('template loaded using router!')}
		})
})
