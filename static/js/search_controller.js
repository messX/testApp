var myApp = angular.module('searchApp',[]);

myApp.controller('searchController',function($scope,$http)
{
	
console.log('hello '+$scope.x);
$scope.hello=function(y){
	console.log('hello '+y);
	$scope.x=y;
};

});