require('cypress-xpath');
const Page = require( '../mediawiki/Page' );

class HomepagePage extends Page {
    get usename() { return cy.get( '#pt-userpage' ); }
    get homepage() { return cy.get( '#ca-homepage' ); }
    get firstheading() { return cy.get( '#firstHeading' ); }
    get startTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[1]/h2/div[2]' ); }
    get helpTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[2]/div/h2/div[2]' ); }
    get impactTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[2]/h2/div[2]' ); }
    get mentorshipTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[2]/div[1]/h2/div[2]' ); }
    get accountTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[1]/h3/div[2]' ); }
    get emailTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[2]/h3/div[2]' ); }
    get emailButton() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[2]/div[2]/span' ); }
    get tutorialTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[3]/h3/div[2]' ); }
    get editingTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[1]/div/div[4]/h3/div[2]' ); }
    get startEditingButton() { return cy.xpath( '//*[@id="mw-ge-homepage-startediting-cta"]/a/span[2]' ); }
    get continueButton() { return cy.xpath( '/html/body/div[7]/div/div[1]/div[2]/div[3]/div[2]/span[2]/a/span[2]' ); }
    get suggestionsButton() { return cy.xpath( '/html/body/div[7]/div/div[1]/div[2]/div[3]/div[2]/span[2]/a/span[2]' ); }
    get suggestionTitle() { return cy.xpath( '//*[@id="mw-content-text"]/div/div[1]/div[2]/div/div/div[3]/div[2]/div/div/a/div[2]/h3' ); }

    open() {
        super.openTitle( 'Special:Homepage' );
    }
}

module.exports = new HomepagePage();
