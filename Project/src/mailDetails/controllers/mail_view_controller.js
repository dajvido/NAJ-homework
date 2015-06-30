(function () {
angular.module('mailApp')
  .controller('MailViewCtrl', MailViewCtrl);

function MailViewCtrl(MailView, $location) {
  var ths = this,
      email_id = $location.path().split("/")[2];

  MailView.setAsRead(email_id);
  MailView.fetchOne(email_id).then(function(res) {
    ths.data = res.data;
  });

  ths.remove = function() {
    MailView.deleteById(email_id);
  }
}
}());
