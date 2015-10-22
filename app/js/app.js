//app.js; Initialize angular
"use strict";

angular.module('workplayrelax', [
    'ngMaterial',
    'ui.router',
    'ngAnimate',
    'ngAria'
])
    //Configure Material Theme
    .config(function($mdThemingProvider){
        $mdThemingProvider.theme('black')
            .primaryPalette('grey', {
                'default': '900'
            });
        $mdThemingProvider.setDefaultTheme('black');
    })

    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../app/partials/home.html'
            })
            .state('apps',{
                url: '/apps',
                templateUrl: '../app/partials/apps.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '../app/partials/contact.html'
            });
    });