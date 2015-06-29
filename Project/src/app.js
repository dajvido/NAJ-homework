var app = angular.module('mailApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/inbox', {
                templateUrl: 'mailList/views/mail_list.html',
                controller: 'RecMailsCtrl',
                controllerAs: 'mails'
            })
            .when('/sent', {
                templateUrl: 'mailList/views/mail_list.html',
                controller: 'SentMailsCtrl',
                controllerAs: 'mails'
            })
            .when('/view/:emailId', {
                templateUrl: 'mailDetails/views/mail_details.html',
                controller: 'MailViewCtrl',
                controllerAs: 'mail'
            })
            .when('/create', {
                templateUrl: 'mailNew/views/new_mail.html',
                controller: 'NewMailCtrl',
                controllerAs: 'mail'
            })
            .when('/create/:emailId', {
                templateUrl: 'mailNew/views/new_mail.html',
                controller: 'RespMailCtrl',
                controllerAs: 'mail'
            })
            .when('/config', {
                templateUrl: 'mailList/views/config.html',
                controller: 'ConfigCtrl',
                controllerAs: 'config'
            })
            .otherwise({
                redirectTo: '/inbox'
            })
    });
