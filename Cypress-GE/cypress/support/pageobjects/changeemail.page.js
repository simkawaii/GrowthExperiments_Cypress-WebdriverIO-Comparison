const Page = require( '../mediawiki/Page' );

class ChangeEmailPage extends Page {
    get email() { return cy.get( '#ooui-php-1' ); }
    get changeButton() { return cy.get( '#ooui-php-7' ); }

    open() {
        super.openTitle( 'Special:ChangeEmail' );
    }
}

module.exports = new ChangeEmailPage();
