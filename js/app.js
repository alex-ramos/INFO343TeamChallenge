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

    //Checks entered bithdate against date 13 years ago
    //Returns true if birthday is valid, false if birthday is not
    $scope.checkBirthDate = function(){
    	var bDate = Date.parse($scope.main.birthdate);
    	var oldDate = new Date();
    	oldDate.setFullYear(oldDate.getFullYear() - 13);
    	if(bDate < oldDate){
    		return true;
    	}else{
	     	return false;
	    }
    };


    //Checks both password fields and if they match each other
    //Returns true if match, false if different
    $scope.confirmPassword = function(){
    	var pwd1 = $scope.main.password;
    	var pwd2 = $scope.main.cPassw;

    	if(pwd1 === pwd2){
    		return true;
    	}
    	else{
    		return false;
    	}
    }

    //Function to validate birthdate on Page
    $scope.checkFormBD = function(){
    	var valid = $scope.checkBirthDate();
    	$scope.signForm.birthdate.$setValidity("birthdate", valid);
    }

    //Function to validate passwords
    $scope.checkFormPass = function(){
    	var valid = $scope.confirmPassword();
    	$scope.signForm.password.$setValidity("password", valid);
    	$scope.signForm.cPassw.$setValidity("cPassw", valid);
    }

}]);

