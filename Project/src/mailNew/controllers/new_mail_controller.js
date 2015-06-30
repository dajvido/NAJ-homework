(function () {
  angular.module('mailApp')
    .controller('NewMailCtrl', NewMailCtrl);

  function NewMailCtrl(SendMail, Config) {
    var ths = this;
    ths.newMail = {};

    Config.paintWindow();
    ths.send = function(newMail) {
      SendMail.send(newMail);
    }
  }
}());
