/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myModule = angular.module("myFirstModule", []);
myModule.factory('DataService', function() {
    return {message: "I'm message from a service"}
})

myModule.filter('lower',function(){
    return function(msg){
        return msg.toLowerCase();
    }
});

myModule.filter('concatenate',function(DataService){
    return function(msg){
        return msg.toLowerCase()+DataService.message.toUpperCase();
    }
})

function firstCtrl($scope, DataService) {
    $scope.data = DataService;
}

function secondCtrl($scope, DataService) {
    $scope.data = DataService;
    $scope.reverseMessage = function() {
        return $scope.data.message.split("").reverse().join("");
    }
    $scope.capitalize=function(message){
        return message.toUpperCase();
    }
}

