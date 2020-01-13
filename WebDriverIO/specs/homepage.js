var assert = require( 'assert' ),
    HomepagePage = require( '../pageobjects/homepage.page' ),
    PreferencesPage = require( '../pageobjects/preferences.page' ),
    ChangeEmailPage = require( '../pageobjects/changeemail.page' ),
    CreateAccountPage = require('../pageobjects/createaccount.page')
    LoginPage = require( 'wdio-mediawiki/LoginPage' ),
    Api = require( 'wdio-mediawiki/Api' ),
    Util = require( 'wdio-mediawiki/Util' );

describe( 'Homepage', function () {
    var username, password;

    beforeEach( function () {
        username = Util.getTestString( 'NewUser-' );
        password = Util.getTestString();
        CreateAccountPage.createAccount(username, password);
        LoginPage.login( username, password );
    } );

    it( 'is enabled for new user', function () {

        HomepagePage.open();
        assert( HomepagePage.homepage.isExisting() );

    } );

    it( 'can be disabled for new user', function () {

        PreferencesPage.open();
        PreferencesPage.clickHomepageCheckBox();

        HomepagePage.open();
        assert( !HomepagePage.homepage.isExisting() );

    } );

    it( 'can be disabled and re-enabled for new user', function () {

        PreferencesPage.open();
        PreferencesPage.clickHomepageCheckBox();

        HomepagePage.open();
        assert( !HomepagePage.homepage.isExisting() );

        PreferencesPage.open();
        PreferencesPage.clickHomepageCheckBox();

        HomepagePage.open();
        assert( HomepagePage.homepage.isExisting() );

    } );

    it( 'Heading shows the logged-in user\'s name', function () {

        HomepagePage.open();
        assert( HomepagePage.firstheading.getText(), `Hello, ${username}!` );
    } );

    it( 'Verify newcomer homepage is a default page from clicking username link', function () {

        PreferencesPage.open();
        PreferencesPage.selectDefaultHomepageCheckbox();

        HomepagePage.open();
        HomepagePage.usename.click();
        assert( HomepagePage.homepage.getAttribute( 'class' ).includes( 'selected' ) );
    } );

    it( 'Verify newcomer homepage is not a default page from clicking username link', function () {

        PreferencesPage.open();
        PreferencesPage.unselectDefaultHomepageCheckbox();

        HomepagePage.open();
        HomepagePage.usename.click();
        assert.strictEqual( HomepagePage.homepage.getAttribute( 'class' ).includes( 'selected' ), false );
    } );

    it( 'Verify if the "Start" module is available', function () {

        HomepagePage.open();
        assert( HomepagePage.startTitle.getText(), 'Start here' );
    } );

    it( 'Verify if the "Help" module is available', function () {

        HomepagePage.open();
        assert( HomepagePage.helpTitle.getText(), 'Get help with editing' );
    } );

    it( 'Verify if the "Impact" module is available', function () {

        HomepagePage.open();
        assert( HomepagePage.impactTitle.getText(), 'Your impact' );
    } );

    it( 'Verify if the "Mentorship" module is available', function () {

        HomepagePage.open();
        assert( HomepagePage.mentorshipTitle.getText(), 'Your mentor' );
    } );

    it( 'Verify if the "Account creation" section is available', function () {

        HomepagePage.open();
        assert.strictEqual( HomepagePage.accountTitle.getText(), 'Account created' );
    } );

    it( 'Verify "Email" section when the user has no email address…', function () {

        HomepagePage.open();
        assert.strictEqual( HomepagePage.emailTitle.getText(), 'Add your email' );
    } );

    it( 'Verify "Email" section when the user has an unconfirmed email address…', function () {

        const email = 'email' + Math.random().toString() + '@gmail.com';
        HomepagePage.open();
        HomepagePage.emailButton.click();

        ChangeEmailPage.email.click();
        ChangeEmailPage.email.setValue( email );
        ChangeEmailPage.changeButton.click();

        HomepagePage.open();

        assert.strictEqual( HomepagePage.emailTitle.getText(), 'Confirm your email' );
    } );

    it( 'Verify "Email" section when the user has a confirmed email address…', function () {

        LoginPage.loginAdmin();
        PreferencesPage.open();
        PreferencesPage.enableHomepage();
        HomepagePage.open();

        assert.strictEqual( HomepagePage.emailTitle.getText(), 'Email added' );
    } );

    it( 'Verify if the "Tutorial" section is available', function () {

        HomepagePage.open();
        assert.strictEqual( HomepagePage.tutorialTitle.getText(), 'Learn to edit' );
    } );

    it( 'Verify if the ""Editing" section is available', function () {

        HomepagePage.open();
        assert.strictEqual(HomepagePage.editingTitle.getText(), 'Start editing' );
    } );
} );
