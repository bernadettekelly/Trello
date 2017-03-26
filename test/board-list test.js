import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import BoardTitle from '../js/components/board-list';

describe('BoardTitle component', function() {
	it('Renders the board-title', function () {
		const lists = "Example lists";

		const renderer = TestUtils.createRenderer();
		renderer.render(lists={lists} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('board-title');

		const lists = result.props.children[0];
		lists.type.should.equal('String');

		

	});
});