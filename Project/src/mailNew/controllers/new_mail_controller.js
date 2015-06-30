(function () {
  angular.module('mailApp')
    .controller('NewMailCtrl', NewMailCtrl);

  function NewMailCtrl(SendMail) {
    var ths = this;
    ths.newMail = {};
    ths.send = function(newMail) {
      SendMail.send(newMail);
    }
  }
}());
