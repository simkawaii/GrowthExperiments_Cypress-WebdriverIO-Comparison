const Page = require( 'wdio-mediawiki/Page' );

class CreateAccountPage extends Page {
    get username() { return $( '#wpName2' ); }
    get password() { return $( '#wpPassword2' ); }
    get confirmPassword() { return $('#wpRetype' ); }
    get submitButton() { return $( '#wpCreateaccount' ); }

    open() {
        super.openTitle( 'Special:CreateAccount' );
    }

    createAccount( username, password ) {
        this.open();
        this.username.setValue( username );
        this.password.setValue( password );
        this.confirmPassword.setValue( password );
        browser.execute( (submitButton) => submitButton.scrollIntoView(), $('#wpCreateaccount').value);
        this.submitButton.click();
    }
}

module.exports = new CreateAccountPage();
