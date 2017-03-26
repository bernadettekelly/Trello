import React from 'react';
import Card from './card';

export default function CardsList(props) {
	return (
	<div className="CardsContent">
		<div className="Text">{props.Text}</div>
	</div>
	);
}
