(function () {
  angular.module('mailApp')
    .controller('RecMailsCtrl', RecMailsCtrl);

  function RecMailsCtrl(ReceivedMails) {
    var ths = this;
    ths.type = 'Sender'
    ReceivedMails.fetchRecAll().then(function(res) {
      ths.list = res.data;
    });

    ths.remove = function(id) {
      ReceivedMails.deleteById(id).then(function(response) {
        ReceivedMails.fetchRecAll().then(function(res) {
          ths.list = res.data;
        });
      });
    }
  }
}());
