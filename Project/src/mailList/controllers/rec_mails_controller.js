(function () {
angular.module('mailApp')
  .controller('RecMailsCtrl', RecMailsCtrl);

function RecMailsCtrl(ReceivedMails) {
  var ths = this;
  ReceivedMails.fetchRecAll().then(function(res) {
    ths.list = res.data;
  });
}
}());
