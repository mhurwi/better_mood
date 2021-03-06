var cbtAppServices = angular.module('cbtAppServices', ['ngCookies']);

cbtAppServices.factory('ListEvents', ['$resource','$cookies',function($resource, $cookies) {
  var resource = $resource("/api/events");
  return resource;
}])
cbtAppServices.factory('ListAnonymousEvents', ['$resource','$cookies',function($resource, $cookies) {
  var resource = $resource("/api/events/anonymous");
  return resource;
}])
cbtAppServices.factory('CbtEvent', ['$resource','$cookies',function($resource, $cookies) {
  var resource = $resource("/api/events/:id", {}, {update: {method: "PUT"}});
  return resource;
}])
