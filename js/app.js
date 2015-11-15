//Javascript for the Team challenge
//If all fields are valid, clicking the submit button should display a simple confirmation message to the user. This should be an alert paragraph above the form. Don't use a JavaScript alert() because that creates a modal dialog that is difficult for automated tests to deal with.
'use strict';
// create angular app
var validation = angular.module('validationApp', ['ngMessages']);

// create angular controller
validation.controller('MainCtrl', ["$scope", function($scope) {

    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {
    	// check to make sure the form is completely valid
    	if(isValid) {
    		alert("You have successfully submitted");
    	}
    };

}]);