(function () {
  angular.module('mailApp')
    .controller('SentMailsCtrl', SentMailsCtrl);

  function SentMailsCtrl(ReceivedMails) {
    var ths = this;
    ths.type = 'Receivers'
    ReceivedMails.fetchSentAll().then(function(res) {
      ths.list = res.data;
    });

    ths.remove = function(id) {
      ReceivedMails.deleteById(id).then(function(response) {
        ReceivedMails.fetchSentAll().then(function(res) {
          ths.list = res.data;
        });
      });
    }
  }
}());
