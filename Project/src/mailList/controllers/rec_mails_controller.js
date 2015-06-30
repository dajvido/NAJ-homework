(function () {
  angular.module('mailApp')
    .controller('RecMailsCtrl', RecMailsCtrl);

  function RecMailsCtrl(ReceivedMails, Config, $interval) {
    var ths = this;
    ths.type = 'Sender'
    Config.paintWindow();

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
    $interval(function () {ReceivedMails.fetchRecAll().then(function(res) { ths.list = res.data; }); console.log('Refreshing!');}, 1000 * Config.getRefreshTime());
  }
}());
