(function () {
  angular.module('mailApp')
    .controller('RespMailCtrl', RespMailCtrl);

  function RespMailCtrl(SendMail, $location) {
    var ths = this
    email_id = $location.path().split("/")[2];

    SendMail.fetchOne(email_id).then(function(res) {
      ths.data = res.data;
      ths.newMail = {
        'receivers': ths.data.sender,
        'title': 'Re: ' + ths.data.title,
        'content': '\n\n\n---------\n' + ths.data.content
      };
      ths.send = function(newMail) {
        SendMail.send(newMail);
      }
    });
  }
}());
