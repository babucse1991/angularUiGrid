'use strict';

angular.module('shopCartApp', [
                               'ngRoute',
                               'ngGrid',
                               'ngAnimate', 
                               'ui.bootstrap',
                               'ngMessages'
                               ])
                               .config(function ($routeProvider, $locationProvider) {
                            	   $routeProvider
                            	   .when('/', {
                            		   templateUrl: 'views/studentList.html',
                            		   controller: 'ShopCartCtrl'
                            	   })
                            	   .when('/studentDetail', {
                            		   templateUrl: 'views/studentDetail.html',
                            		   controller: 'studentDetailCtrl'
                            	   })

                            	   .otherwise({
                            		   redirectTo: '/'
                            	   });

                               });