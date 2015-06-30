(function () {
  angular.module('mail_viewer.service', [])
    .service('MailView', MailView);

  function MailView($http, $location) {
    return {
      fetchOne: function(id) {
        return $http.get('/emails/' + id).then(function(res) {
          return res;
        });
      },
      setAsRead: function(id) {
        return $http.put('/emails/' + id, {
          read: true
        }).then(function(res) {
          return res;
        });
      },
      deleteById: function(id) {
        return $http.delete('/emails/' + id).then(function(res) {
          $location.path("/inbox");
        });
      },
      response: function(id) {
        $location.path("/create/" + id);
      }
    }
  }
}());
