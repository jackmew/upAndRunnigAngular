var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers'
])
// 定義要使用$routeProvider這個Service, 取到後 去使用$routeProvider
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);