var cbtAppServices = angular.module('cbtAppServices', ['ngCookies']);

cbtAppServices.factory('ListEvents', ['$resource','$cookies',function($resource, $cookies) {
  var resource = $resource("/api/events.json");
  return resource;
}])
cbtAppServices.factory('CbtEvent', ['$resource','$cookies',function($resource, $cookies) {
  var resource = $resource("/api/events/:id", {}, {update: {method: "PUT"}});
  return resource;
}])
