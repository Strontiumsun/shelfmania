import React from "react";

// This file exports both the List and ListItem components

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem(props) {
    return <li className="list-group-item" key={props.id}>
        Title: {props.title}
        <br></br>
        Author: {props.authors}
        <br />
        Description: {props.description}
        <br />
        <img src={props.thumbnail} alt="thumbnail" />
        <br></br>
        <a href={props.link}>More Info</a>
    </li>;
}
