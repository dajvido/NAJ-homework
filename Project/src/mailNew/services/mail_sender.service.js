(function () {
  angular.module('mail_sender.service', [])
    .service('SendMail', SendMail);

  function SendMail() {
    return {
      nth: function() {
        return [];
      },
      nth2: function() {
        return [];
      }
    }
  }
}());
