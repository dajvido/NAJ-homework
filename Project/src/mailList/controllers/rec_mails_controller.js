(function () {
angular.module('mailApp')
  .controller('RecMailsCtrl', RecMailsCtrl);

function RecMailsCtrl(ReceivedMails) {
  var ths = this;
  ths.list = ReceivedMails.fetchRecAll();
}
}());
