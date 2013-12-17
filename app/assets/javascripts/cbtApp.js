var cbtApp = angular.module('cbtApp',[
		'ngResource',
		'ngRoute',
		'cbtAppRoutes', 
		'cbtAppServices'
	]);

angular.module("cbtApp").run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

cbtApp.config(['$httpProvider', function($httpProvider){
	authToken = $("meta[name=\"csrf-token\"]").attr("content")
	$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken
}]);

// # This is for Turbolinks compatibility, but it was fucking up
// # $(document).on 'page:load', ->
// #   $('[ng-app]').each ->
// #     module = $(this).attr('ng-app')
// #     angular.bootstrap(this, [module])


// # defaults = $http.defaults.headers
// # defaults.patch = defaults.patch || {}
// # defaults.patch['Content-Type'] = 'application/json'