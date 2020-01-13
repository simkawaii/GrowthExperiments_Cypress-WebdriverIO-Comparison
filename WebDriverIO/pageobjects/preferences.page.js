const Page = require( 'wdio-mediawiki/Page' );

class PreferencesPage extends Page {

	get homepage() { return browser.element( '#mw-input-wpgrowthexperiments-homepage-enable' ); }
	get save() { return browser.element( '#prefcontrol' ); }
	get homepageBox() { return browser.element( '[name="wpgrowthexperiments-homepage-enable"]' ); }
	get defaultHomepage() { return browser.element( '#mw-input-wpgrowthexperiments-homepage-pt-link' ); }
	get defaultHomepageBox() { return browser.element( '[name="wpgrowthexperiments-homepage-pt-link"]' ); }

	scrollToHomepageCheckBox() { browser.execute( ( homepage ) => homepage.scrollIntoView(), browser.element( '[name="wpgrowthexperiments-homepage-enable"]' ).value ); }

	open() {
		super.openTitle( 'Special:Preferences' );
	}

	clickHomepageCheckBox() {
		this.scrollToHomepageCheckBox();
		this.homepage.waitForVisible();
		this.homepage.click();
		this.save.click();
	}

	selectDefaultHomepageCheckbox() {
		this.scrollToHomepageCheckBox();
		this.homepage.waitForVisible();
		if (!this.homepageBox.isSelected())
		{
			this.homepage.click();
			this.defaultHomepage.waitForVisible();
			this.defaultHomepage.click();
			this.save.click();
		}
		else
		{
			this.defaultHomepage.waitForVisible();
			if (!this.defaultHomepageBox.isSelected())
			{
				this.defaultHomepage.click();
				this.save.click();
			}
		}
	}

	unselectDefaultHomepageCheckbox(){
		this.scrollToHomepageCheckBox();
		this.homepage.waitForVisible();
		if (!this.homepageBox.isSelected())
		{
			this.homepage.click();
			this.save.click();
		}
		else
		{
			this.defaultHomepage.waitForVisible();
			if (this.defaultHomepageBox.isSelected())
			{
				this.defaultHomepage.click();
				this.save.click();
			}
		}
	}

	enableHomepage() {
		this.scrollToHomepageCheckBox();
		this.homepage.waitForVisible();
		if (!this.homepageBox.isSelected())
		{
			this.homepage.click();
			this.save.click();
		}
	}
}

module.exports = new PreferencesPage();
