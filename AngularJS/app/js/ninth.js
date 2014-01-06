var n = angular.module("behaviorApp", []);

n.directive("enter", function() {
    return  function(scope, element) {
        element.bind("mouseenter", function() {
            document.getElementById("testnn").innerHTML = "<h1> nn is in</h1>";
        });
    }
})

n.directive("leave", function() {
    return  function(scope, element) {
        element.bind("mouseleave", function() {
            document.getElementById("testnn").innerHTML = "<h1> nn is out</h1>";
        });
    }
})