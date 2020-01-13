const querystring = require( 'querystring' );

class Page {

	openTitle( title, query = {}, fragment = '' ) {
		query.title = title;
		cy.visit('/index.php?' +
			querystring.stringify( query ) +
			( fragment ? ( '#' + fragment ) : '' )
		);
	}
}

module.exports = Page;
