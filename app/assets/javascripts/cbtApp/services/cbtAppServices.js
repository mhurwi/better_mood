var cbtAppServices = angular.module('cbtAppServices', []);

cbtAppServices.factory('ListEvents', ['$resource','$cookies',function($resource, $cookies) {
  var resource = $resource("/api/events.json");
  return resource;
}])