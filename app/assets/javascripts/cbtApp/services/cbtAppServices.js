angular.module('Services',['ngResource'])
  .factory('CbtEvent', ['$resource','$cookies',function($resource, $cookies) {
    var resource = $resource("/api/events.json",{}, {update: {method: "PUT"}});
    return resource;
  }])