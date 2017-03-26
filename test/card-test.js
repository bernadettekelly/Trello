import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
	it('Renders the Text', function () {
		const Text = "Example Text";

		const renderer = TestUtils.createRenderer();
		renderer.render(Text={Text} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('Text');

		const Text = result.props.children[0];
		Text.type.should.equal('String');

	});
});