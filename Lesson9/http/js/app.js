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
		element.count += 1;
		var promiseElement = $http.put('/elements/' + element.id, element)
		promiseElement.then(function(elem) {
			$scope.results[element.id] = elem;
		})
	};
});
