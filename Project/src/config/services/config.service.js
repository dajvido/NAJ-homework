(function () {
  angular.module('config.service', [])
    .service('Config', Config);

  function Config($window) {
    var ths = this,
        ls = $window.localStorage,
        defaultLayout = 'white',
        defaultTime = 60;

    return {
      getRefreshTime: function() {
        return ls.time || defaultTime;
       },
      getLayout: function() {
        ths.layout = ls.layout || defaultLayout;
        return ths.layout;
      },
      paintWindow: function() {
        ths.layout = ls.layout || defaultLayout;
        document.querySelector('html').classList.remove('white');
        document.querySelector('body').classList.remove('white');
        document.querySelector('html').classList.remove('gray');
        document.querySelector('body').classList.remove('gray');
        document.querySelector('html').classList.remove('teal');
        document.querySelector('body').classList.remove('teal');
        document.querySelector('html').classList.add(ths.layout);
        document.querySelector('body').classList.add(ths.layout);
      }

    }
  }
}());
