var HomepagePage = require( '../support/pageobjects/homepage.page' ),
    PreferencesPage = require('../support/pageobjects/preferences.page'),
    ChangeEmailPage = require('../support/pageobjects/changeemail.page'),
    CreateAccountPage = require('../support/mediawiki/CreateAccountPage'),
    LoginPage = require('../support/mediawiki/LoginPage'),
    Util = require('../support/mediawiki/Util');


describe('Special Homepage', () => {
    var username, password;

    beforeEach(function () {
        username = Util.getTestString('NewUser-');
        password = Util.getTestString();
        CreateAccountPage.createAccount(username, password);
        LoginPage.login(username, password);
    });

    it('is enabled for new user', function () {
        HomepagePage.open();
        HomepagePage.homepage.should('be.visible');
    });

    it('can be disabled for new user', function () {
        PreferencesPage.open();
        PreferencesPage.clickHomepageCheckBox();

        HomepagePage.open();
        HomepagePage.homepage.should('not.exist');
    })

    it( 'can be disabled and re-enabled for new user', function () {

        PreferencesPage.open();
        PreferencesPage.clickHomepageCheckBox();

        HomepagePage.open();
        HomepagePage.homepage.should('not.exist');

        PreferencesPage.open();
        PreferencesPage.clickHomepageCheckBox();

        HomepagePage.open();
        HomepagePage.homepage.should('be.visible');
    } );

    it( 'Heading shows the logged-in user\'s name', function () {

        HomepagePage.open();
        HomepagePage.firstheading.should('have.text',`Hello, ${username}!` );
    } );

    it( 'Verify newcomer homepage is a default page from clicking username link', function () {

        PreferencesPage.open();
        PreferencesPage.selectDefaultHomepageCheckbox();

        HomepagePage.open();
        HomepagePage.usename.click();
        HomepagePage.homepage.should('have.class', 'selected');
    } );

    it( 'Verify newcomer homepage is not a default page from clicking username link', function () {

        PreferencesPage.open();
        PreferencesPage.unselectDefaultHomepageCheckbox();

        HomepagePage.open();
        HomepagePage.usename.click();
        HomepagePage.homepage.should('not.have.class', 'selected');
    } );

    it( 'Verify if the "Start" module is available', function () {

        HomepagePage.open();
        HomepagePage.startTitle.should('have.text', 'Start here');
    } );

    it( 'Verify if the "Help" module is available', function () {

        HomepagePage.open();
        HomepagePage.helpTitle.should('have.text', 'Get help with editing');
    } );

    it( 'Verify if the "Impact" module is available', function () {

        HomepagePage.open();
        HomepagePage.impactTitle.should('have.text', 'Your impact');
    } );

    it( 'Verify if the "Mentorship" module is available', function () {

        HomepagePage.open();
        HomepagePage.mentorshipTitle.should('have.text', 'Your mentor');
    } );

    it( 'Verify if the "Account creation" section is available', function () {

        HomepagePage.open();
        HomepagePage.accountTitle.should('have.text', 'Account created');
    } );

    it( 'Verify "Email" section when the user has no email address…', function () {

        HomepagePage.open();
        HomepagePage.emailTitle.should('have.text', 'Add your email');
    } );

    it( 'Verify "Email" section when the user has an unconfirmed email address…', function () {

        const email = 'email' + Math.random().toString() + '@gmail.com';
        HomepagePage.open();
        HomepagePage.emailButton.click();

        ChangeEmailPage.email.click();
        ChangeEmailPage.email.type( email );
        ChangeEmailPage.changeButton.click();

        HomepagePage.open();
        HomepagePage.emailTitle.should('have.text', 'Confirm your email');
    } );

    it( 'Verify "Email" section when the user has a confirmed email address…', function () {

        LoginPage.loginAdmin();
        PreferencesPage.open();
        PreferencesPage.enableHomepage();

        HomepagePage.open();
        HomepagePage.emailTitle.should('have.text','Email added');
    } );

    it( 'Verify if the "Tutorial" section is available', function () {

        HomepagePage.open();
        HomepagePage.tutorialTitle.should('have.text', 'Learn to edit');
    } );

    it( 'Verify if the ""Editing" section is available', function () {

        HomepagePage.open();
        HomepagePage.editingTitle.should('have.text', 'Start editing');
    } );
})
