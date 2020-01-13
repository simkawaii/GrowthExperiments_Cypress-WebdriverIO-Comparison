const Page = require( './Page' );

class LoginPage extends Page {
	get username() { return cy.get( '#wpName1' ); }
	get password() { return cy.get( '#wpPassword1' ); }
	get loginButton() { return cy.get( '#wpLoginAttempt' ); }
	get userPage() { return cy.get( '#pt-userpage' ); }

	open() {
		super.openTitle( 'Special:UserLogin' );
	}

	login( username, password ) {
		this.open();
		this.username.clear().type( username );
		this.password.clear().type( password );
		this.loginButton.click();
	}

	loginAdmin() {
		this.login( Cypress.env("adminUser"), Cypress.env("adminPassword") );
	}
}

module.exports = new LoginPage();
