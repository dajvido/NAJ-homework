(function() {
    angular.module('mailApp')
      .filter('read', CheckReadFilter);

    function CheckReadFilter() {
      function filter(input) {
        return input ? 'read' : 'unread'
      }
      return filter;
    }
}());
