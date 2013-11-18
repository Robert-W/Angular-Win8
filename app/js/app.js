var module = angular.module("simpleApp",['ngRoute','appControllers','projectControllers']).
 	config(["$routeProvider",function($routeProvider){
		$routeProvider.
			when("/home",{templateUrl:'app/partials/home.html',controller: 'homeController'}).
			when("/project1",{templateUrl:'app/partials/project1.html',controller: 'project1Controller' }).
			when("/project2",{templateUrl:'app/partials/project2.html',controller: 'project2Controller' }).
			otherwise({redirectTo: "/home"});
}],function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist(['.*']);
});