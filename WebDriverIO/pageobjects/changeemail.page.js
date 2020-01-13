const Page = require( 'wdio-mediawiki/Page' );

class ChangeEmailPage extends Page {
    get email() { return $( '#ooui-php-1' ); }
    get changeButton() { return $( '#ooui-php-7' ); }

    open() {
        super.openTitle( 'Special:ChangeEmail' );
    }
}

module.exports = new ChangeEmailPage();
