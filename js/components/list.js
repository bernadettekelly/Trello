import React from 'react';
import Card from './card';

export default function List(props) {
	return (
	<div className="listTitle">
		<div className="title">{props.title}</div>
	</div>
	);
}

