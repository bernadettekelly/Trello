import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('ListContainer component', function() {
	it('Renders the ListContainer', function () {
		const OnChange = "Example";
		const Text = "[]";

		const renderer = TestUtils.createRenderer();
		renderer.render(OnChange={OnChange} Text={Text} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('ListContainer');

		const OnChange = result.props.children[0];
		OnChange.type.should.equal('String');

		const Text = result.props.children[0];
		Text.type.should.equal(Array);

		

	});
});