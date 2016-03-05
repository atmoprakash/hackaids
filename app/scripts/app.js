'use strict';

var app = angular.module('app', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'LocalStorageModule',
    'highcharts-ng',
    'angular.morris-chart'
]);

app.config(['localStorageServiceProvider', '$routeProvider', function (localStorageServiceProvider, $routeProvider) {
    localStorageServiceProvider.setPrefix('ls');
    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .when('/page1', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .when('/page2', {
            templateUrl: 'views/dashboard1.html',
            controller: 'page2Ctrl'
        })
        .when('/page3', {
            templateUrl: 'views/dashboard2.html',
            controller: 'page3Ctrl'
        })
        .when('/page4', {
            templateUrl: 'views/dashboard3.html',
            controller: 'page4Ctrl'
        })
        .when('/page5', {
            templateUrl: 'views/dashboard4.html',
            controller: 'page5Ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
