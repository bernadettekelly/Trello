import React from 'react';
import list from './list';

//<Board title="My title" subtitle="Subtitle" />
export default function Board(props) {
	return (
	<div className="boardTitle">
		<div className="title">{props.title}</div>
		<div className="subtitle">{props.subtitle}</div>
	</div>
		);
}


