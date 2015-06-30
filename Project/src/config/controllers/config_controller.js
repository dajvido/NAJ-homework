(function () {
  angular.module('mailApp')
    .controller('ConfigCtrl', ConfigCtrl);

  function ConfigCtrl(Config, $window, $scope) {
    var ths = this,
        ls = $window.localStorage;

    $scope.layouts = ['white','gray','teal'];

    ths.layout = Config.getLayout();
    
    Config.paintWindow();
    ths.setRefreshTime = function(time) {
      ls.time = time || Config.getRefreshTime();
    }

    ths.setLayout = function(layout) {
      ls.layout = layout;
      Config.paintWindow();
    }
  }
}());
