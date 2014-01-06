var n = angular.module("behaviorApp", []);

n.directive("enter", function() {
    return  function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            document.getElementById("testnn").innerHTML = "<h1> nn is in</h1>";
            element.addClass(attrs.enter);
        });
    }
})

n.directive("leave", function() {
    return  function(scope, element,attrs) {
        element.bind("mouseleave", function() {
            document.getElementById("testnn").innerHTML = "<h1> nn is out</h1>";
            element.removeClass(attrs.enter);
        });
    }
})