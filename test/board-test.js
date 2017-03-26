import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/board';

describe('Board component', function() {
	it('Renders the title and subtitle', function () {
		const title = "Example title";
		const subtitle = "Example subtitle";

		const renderer = TestUtils.createRenderer();
		renderer.render(title={title} subtitle={subtitle} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('boardTitle');

		const title = result.props.children[0];
		title.type.should.equal('String');

		const subtitle = result.props.children[0];
		subtitle.type.should.equal('String')

	});
});