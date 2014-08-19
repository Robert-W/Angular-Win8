var appControllers = angular.module("appControllers",[]);

appControllers.controller('homeController',['$scope',function($scope){
	$scope.greeting = "Welcome Home";
}]);

var projectControllers = angular.module("projectControllers",[]);

projectControllers.controller('project1Controller',['$scope',function($scope){
	$scope.greeting = "Welcome to Project 1";
}]);

projectControllers.controller('project2Controller',['$scope',function($scope){
	$scope.greeting = "Welcome to Project 2";
}]);