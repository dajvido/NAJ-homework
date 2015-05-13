angular.module('app', []).controller('AppCtrl', function ($scope, $http) {
	$scope.results = [];

	$scope.loadUsers = function() {
		$http.get('/elements')
			.success(function(data) {
				$scope.results = data;
			})
			.error(function(err) {
				$scope.results = err;
			});
	}

	$scope.clickElement = function (element) {
		var promiseElement = $http.put('/elements/' + element.id, {count: element.count + 1})
		promiseElement.success(function(elem) {
			element.count = elem.count;
		})
	};
});
