/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myModule = angular.module("anotherModule", []);

myModule.directive("nn", function() {
    return {
        restrict: "A", //default is A
        link: function() {
            console.log("nn is in");
            document.getElementById("testnn").innerHTML = "<h1> nn is in</h1>";
        }
    }
})

//myModule.directive("flash", function() {
//    return function() {
//        console.log("flash is in");
//        document.getElementById("test").innerHTML = "<h1> flash is in</h1>";
//    }
//})

myModule.directive("flash", function() {
    return {
        restrict: "C",
        link: function() {
            console.log("flash is in");
            document.getElementById("test").innerHTML = "<h1> flash is in</h1>";
        }
    }
})
