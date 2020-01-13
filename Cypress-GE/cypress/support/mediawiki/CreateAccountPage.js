const Page = require( './Page' );

class CreateAccountPage extends Page {
    get username() { return cy.get( '#wpName2' ); }
    get password() { return cy.get( '#wpPassword2' ); }
    get confirmPassword() { return cy.get('#wpRetype' ); }
    get submitButton() { return cy.get( '#wpCreateaccount' ); }

    open() {
        super.openTitle( 'Special:CreateAccount' );
    }

    createAccount( username, password ) {
        this.open();
        this.username.clear().type( username );
        this.password.clear().type( password );
        this.confirmPassword.clear().type( password );
        this.submitButton.click();
    }
}

module.exports = new CreateAccountPage();
