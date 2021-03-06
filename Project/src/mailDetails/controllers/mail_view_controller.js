(function () {
angular.module('mailApp')
  .controller('MailViewCtrl', MailViewCtrl);

function MailViewCtrl(MailView, Config, $location) {
  var ths = this,
      email_id = $location.path().split("/")[2];

  Config.paintWindow();
  MailView.setAsRead(email_id);
  MailView.fetchOne(email_id).then(function(res) {
    ths.data = res.data;
  });

  ths.remove = function() {
    MailView.deleteById(email_id);
  }

  ths.response = function() {
    MailView.response(email_id);
  }
}
}());
