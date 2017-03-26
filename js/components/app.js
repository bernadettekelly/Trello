import React from 'react';
import Board from "./board"
import List from "./list"
import Card from "./card"
import CardsList from "./List-Cards"
import BoardTitle from "./board-list"
//:id , req.params.id

var lists = [
        {
        title: 'Some title',
        cards: ['ABC', 'DEF', 'GHI']
        }
    ];

export default function App(props) {
    return (
        <div>
            <h1>
                Contacts App
            </h1>
            <div>
                <List title="Contacts List" />
            </div>
            <div>
                <Board title="Main Title" subtitle="Sub" />
                <Board title="Cats" subtitle="ABC" />
                <Board title="My title" subtitle="Subtitle" />
                {props.children}
            </div>
            <div>
                <Card Text="Information for John Smith" />
            </div>
            <div>
                <List Text="Information for John Smith" />
            </div>
           
        </div>
    );
};