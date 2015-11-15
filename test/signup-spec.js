'use strict';

describe('Sign up page', function() {
    var signUpForm = element(by.id('signUpForm'));
    var submitButton = element(by.id('submitButton'));
    var email = element(by.name("email"));
    var firstName = element(by.name("firstName"));
    var lastName = element(by.name("lastName"));
    // Date of Birth var  = element(by.name(""));

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

});