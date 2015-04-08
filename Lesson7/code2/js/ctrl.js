angular.module("myapp").factory("clearService", function() {
  return {
    clear: function (scope, variable) {
      scope[variable] = '';
    }
  }
});

angular.module('myapp').controller('MyCtrl', ["$scope", "clearService", function ($sc, cs) {
	$sc.name = "Gucio";

	$sc.clear = function () {
    cs.clear($sc, 'name');
	};
}]);
