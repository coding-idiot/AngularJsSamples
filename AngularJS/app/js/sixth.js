/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myModule = angular.module("myFirstModule", []);
myModule.factory('DataService', function() {
    var Employees = {};
    Employees.data = [
        {name: 'Nitin', desig: 'aa'},
        {name: 'B', desig: 'bb'},
        {name: 'C', desig: 'cc'},
        {name: 'D', desig: 'ee'},
        {name: 'E', desig: 'ff'},
        {name: 'F', desig: 'dd'}
    ]
    return Employees;
})

function EmpCtrl($scope, DataService) {
    $scope.empList = DataService.data;
}


