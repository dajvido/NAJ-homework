(function(){
angular.module('mailApp', ['ngRoute', 'mail_receiver.service', 'mail_sender.service', 'mail_viewer.service', 'config.service'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/inbox', {
          templateUrl: 'src/mailList/views/mail_list.html',
          controller: 'RecMailsCtrl',
          controllerAs: 'mails'
      })
      .when('/sent', {
          templateUrl: 'src/mailList/views/mail_list.html',
          controller: 'SentMailsCtrl',
          controllerAs: 'mails'
      })
      .when('/view/:emailId', {
          templateUrl: 'src/mailDetails/views/mail_details.html',
          controller: 'MailViewCtrl',
          controllerAs: 'mail'
      })
      .when('/create', {
          templateUrl: 'src/mailNew/views/new_mail.html',
          controller: 'NewMailCtrl',
          controllerAs: 'mail'
      })
      .when('/create/:emailId', {
          templateUrl: 'src/mailNew/views/new_mail.html',
          controller: 'RespMailCtrl',
          controllerAs: 'mail'
      })
      .when('/config', {
          templateUrl: 'src/config/views/config.html',
          controller: 'ConfigCtrl',
          controllerAs: 'config'
      })
      .otherwise({
          redirectTo: '/inbox'
      })
});
}());
