(function() {
    angular.module('mailApp')
      .filter('read', CheckReadFilter);

    function CheckReadFilter() {
      function filter(input) {
        if (input !== undefined) {
          return input ? 'read' : 'unread';
        } else {
          return 'read';
        }
      }
      return filter;
    }
}());
