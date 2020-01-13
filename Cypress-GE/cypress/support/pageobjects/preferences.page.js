const Page = require( '../mediawiki/Page' );

class PreferencesPage extends Page {

	get save() { return cy.get( '#prefcontrol' ); }
	get homepageBox() { return cy.get( '[name="wpgrowthexperiments-homepage-enable"]' ); }
	get defaultHomepageBox() { return cy.get( '[name="wpgrowthexperiments-homepage-pt-link"]' ); }

	scrollToHomepageCheckBox() {
		cy.get('[name="wpgrowthexperiments-homepage-enable"]').scrollIntoView();
	}

	open() {
		super.openTitle( 'Special:Preferences' );
	}

	clickHomepageCheckBox() {
		this.scrollToHomepageCheckBox();
		cy.wait(500);
		this.homepageBox.click();
		this.save.click();
	}

	selectDefaultHomepageCheckbox() {
		this.scrollToHomepageCheckBox();
		cy.wait(500);
		this.homepageBox.check();
		cy.wait(500);
		this.defaultHomepageBox.check();
		this.save.click();
	}

	unselectDefaultHomepageCheckbox(){
		this.scrollToHomepageCheckBox();
		cy.wait(500);
		this.homepageBox.check();
		cy.wait(500);
		this.defaultHomepageBox.uncheck();
		this.save.click();
	}

	enableHomepage() {
		this.scrollToHomepageCheckBox();
		cy.wait(500);
		this.homepageBox.check();
		this.save.click();
	}
}

module.exports = new PreferencesPage();
