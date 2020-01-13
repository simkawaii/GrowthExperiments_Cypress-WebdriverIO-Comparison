const Page = require( 'wdio-mediawiki/Page' );

class HomepagePage extends Page {
    get usename() { return browser.element( '#pt-userpage' ); }
    get homepage() { return browser.element( '#ca-homepage' ); }
    get firstheading() { return browser.element( '#firstHeading' ); }
    get startTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[1]/h2/div[2]' ); }
    get helpTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[2]/div/h2/div[2]' ); }
    get impactTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[2]/h2/div[2]' ); }
    get mentorshipTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[2]/div[1]/h2/div[2]' ); }
    get accountTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[1]/h3/div[2]' ); }
    get emailTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[2]/h3/div[2]' ); }
    get emailButton() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[2]/div[2]/span' ); }
    get tutorialTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[3]/h3/div[2]' ); }
    get editingTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[4]/h3/div[2]' ); }
    get startEditingButton() { return browser.element( '//*[@id="mw-ge-homepage-startediting-cta"]/a/span[2]' ); }
    get continueButton() { return browser.element( '/html/body/div[7]/div/div[1]/div[2]/div[3]/div[2]/span[2]/a/span[2]' ); }
    get suggestionsButton() { return browser.element( '/html/body/div[7]/div/div[1]/div[2]/div[3]/div[2]/span[2]/a/span[2]' ); }
    get suggestionTitle() { return browser.element( '//*[@id="mw-content-text"]/div/div[1]/div[2]/div/div/div[3]/div[2]/div/div/a/div[2]/h3' ); }

    open() {
        super.openTitle( 'Special:Homepage' );
    }
}

module.exports = new HomepagePage();
