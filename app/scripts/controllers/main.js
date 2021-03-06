'use strict';

angular.module('nectarineApp')
  .controller('MainCtrl', function ($scope, angularFire){
    var url = 'https://nectarine.firebaseio.com/items';
	var promise = angularFire(url, $scope, 'items', []);

	$scope.items = promise
    promise.then(function() {

	  $scope.removeItem = function() {
	    $scope.items.splice($scope.toRemove, 1);
	    $scope.toRemove = null;
	  };
	

	$scope.addItem = function () {
		if (!$scope.newItem.length) {
			return;
		}

		$scope.items.push({
			
			desc: $scope.newItem,
			created_at: Date.now(),
		});

		$scope.newItem = '';
	};
 }); //!promise
  });
