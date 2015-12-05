var myApp = angular.module('homeApp',[]);

myApp.controller('homeController',function($scope,$http)
{
	
	$scope.adult=1;
	$scope.child=0;
	$scope.infant=0;
	$scope.passenger=1;
	console.log("hello"+$scope.add);
	$scope.addAdult= function()
	{
		$scope.adult++;
		$scope.passenger++;
		

	};
		$scope.removeAdult= function()
	{
		$scope.adult--;
		$scope.passenger--;
		


	};
		$scope.addChild= function()
	{
		$scope.child++;
		$scope.passenger++;
		

	};
		$scope.removeChild= function()
	{
		$scope.child--;
		$scope.passenger--;
		


	};
			$scope.addInfant= function()
	{
		$scope.infant++;
		$scope.passenger++;
		

	};
		$scope.removeInfant= function()
	{
		$scope.infant--;
		$scope.passenger--;
		


	};

		$scope.startSearch= function()
	{
	
		


	};


	


});