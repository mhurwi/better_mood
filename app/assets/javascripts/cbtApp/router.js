var cbtAppRoutes = angular.module('cbtAppRoutes', ['ui.router']);

cbtAppRoutes.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when("", "/");
	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('events', {
			url: '/',
			templateUrl: "/api/templates/events_list.html",
			onEnter: function() { console.log('template loaded using router!')}
		})
		.state('new_event', {
			url: '/new',
			templateUrl: "/api/templates/create_description.html",
			onEnter: function() { console.log('template loaded using router!')}
		})
		.state('show', {
			url: '/show/:id',
			templateUrl: "/api/templates/show_event.html",
			onEnter: function() { console.log('template loaded using router!')}
		})

})
