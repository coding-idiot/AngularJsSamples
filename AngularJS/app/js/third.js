/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myModule = angular.module("myFirstModule", []);
myModule.factory('DataService', function() {
    return {message: "I'm message from a service"};
});

function firstCtrl($scope, DataService) {
    $scope.data = DataService;
}

function secondCtrl($scope, DataService) {
    $scope.data = DataService;
}
