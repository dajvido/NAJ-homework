(function () {
  angular.module('mail_viewer.service', [])
    .service('MailView', MailView);

  function MailView() {
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
