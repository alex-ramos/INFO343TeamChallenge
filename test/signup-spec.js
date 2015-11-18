'use strict';

describe('Sign up page', function() {
    var signUpForm = element(by.id('signUpForm'));
    var submitButton = element(by.id('submitButton'));
    var email = element(by.name("email"));
    var firstName = element(by.name("firstName"));
    var lastName = element(by.name("lastName"));
    var birthdate = element(by.name("birthdate"));
    var password = element(by.name("password"));
    var confirmPassword = element(by.name("cPassw"));
    var reset = element(by.id("reset"));
    var alertMsg = element(by.id("alert"));

	beforeEach(function() {
        // reload the page before each test
        browser.get('http://localhost:8000');
	});

	it('should have the correct title at the top', function(){

	    expect(browser.getTitle() ).toEqual('Sign Up');
	    browser.getTitle().then(console.log);

  	});

  	it('should have a a submit button', function () {
        	expect(signUpForm.isPresent()).toEqual(true);
        	expect(submitButton.isPresent()).toEqual(true);
    	});

  	// test for invalid email
  	it('should have an email that is validate', function () {
        expect(signUpForm.isPresent()).toEqual(true);
        expect(email.isPresent()).toEqual(true);

        // test for a invalid email
        email.sendKeys("example");
        expect(email.getAttribute('class')).toMatch('ng-invalid-email');
        email.clear().then(function() {
            email.sendKeys(" ");
            expect(email.getAttribute('class')).toMatch('ng-invalid-required');
            email.clear().then(function () {
                email.sendKeys("term@example.com");
                expect(email.getAttribute('class')).toMatch('ng-valid-email');
            });
        });

    });

    it('should have last name that is validate', function () {
        expect(signUpForm.isPresent()).toEqual(true);
        expect(firstName.isPresent()).toEqual(true);
        expect(lastName.isPresent()).toEqual(true);

        lastName.sendKeys(" ");
        expect(lastName.getAttribute('class')).toMatch('ng-invalid-required');
        lastName.sendKeys("Name");
        expect(lastName.getAttribute('class')).toMatch('ng-valid');
    });

    it('should not allow users under 13 to sign up', function(){
    	expect(signUpForm.isPresent()).toEqual(true);
    	expect(birthdate.isPresent()).toEqual(true);
        birthdate.sendKeys("01/01/2100");
        expect(birthdate.getAttribute('class')).toMatch('ng-invalid');

        birthdate.clear().then(function(){
    		birthdate.sendKeys("01/01/1990");
    		expect(birthdate.getAttribute('class')).toMatch('ng-valid');
	});
    });

    it('should make sure the password and its confirmation match', function(){
    	expect(password.isPresent()).toEqual(true);
    	expect(confirmPassword.isPresent()).toEqual(true);
        password.sendKeys("password"); 
	confirmPassword.sendKeys("notpassword");
        expect(password.getAttribute('class')).toMatch('ng-invalid');
        confirmPassword.clear().then(function(){
		confirmPassword.sendKeys("password");
        	expect(password.getAttribute('class')).toMatch('ng-valid');
        });
    });

    it('should let you click the submit button if all fields are valid, and the alert message should be visible', function(){
	firstName.sendKeys("First");
	lastName.sendKeys("Name");
	email.sendKeys("jhall38@uw.edu");
	birthdate.sendKeys("12/10/94");
	password.sendKeys("pass");
	confirmPassword.sendKeys("pass");
	expect(submitButton.isEnabled()).toBe(true); //all fields should be valid after this test
	submitButton.click();
	expect(alertMsg.isDisplayed()).toBe(true);
    });

    it('should clear all fields when clear button is pressed', function(){
    	expect(reset.isPresent()).toBe(true);
	reset.click();
	expect(firstName.getAttribute("value")).toEqual(""); 
	expect(lastName.getAttribute("value")).toEqual("");
	expect(password.getAttribute("value")).toEqual("");
	expect(confirmPassword.getAttribute("value")).toEqual("");
	expect(birthdate.getAttribute("value")).toEqual("");
	expect(email.getAttribute("value")).toEqual("");
    });
    
    it('should not let you click the submit button if fields are invalid', function(){
	expect(submitButton.isEnabled()).toBe(false); //all fields should be valid after this test
    });
});
