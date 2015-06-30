(function () {
  angular.module('mail_sender.service', [])
    .service('SendMail', SendMail);

  function SendMail($http, $location) {
    return {
      send: function(email) {
        email.id = Date.now();
        email.sent = Date.now();
        email.receivers = email.receivers.replace(/ /g, '');
        email.receivers = email.receivers.split(/[;,]/);
        var valid = true;
        for (var i=0; i < email.receivers.length; i++) {
          if (!validateEmail(email.receivers[i])) {
            valid = false;
          }
        }
        if (valid) {
          return $http.post('/sent', email).then(function(res) {
            $location.path("/sent");
          });;
        } else {
          console.log(email.receivers);
          $location.path("/create");
        }
      },
    }
  }

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}());
