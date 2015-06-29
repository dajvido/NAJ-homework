(function () {
  angular.module('mail_receiver.service', [])
    .service('ReceivedMails', ReceivedMails);

  function ReceivedMails($http) {
    return {
      fetchRecAll: function() {
        return $http.get('/emails').then(function(res) {
          return res;
        });
      },
      fetchSentAll: function() {
        return [];
      },
      deleteOne: function(id) {
        return $http.delete('/emails/' + id).then(function(res) {
          return res;
        });
      },
    }
  }
}());
