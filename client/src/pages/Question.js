import React, { Component } from "react";
import API from "../utils/API"

class Question extends Component {
    state = {
        query: "",
        username: "",
        results: [],
    };

    searchForBooks = (query) => {
        API.findBooks(query)
            // .then(res => console.log(res.data))
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err))
        // Search is working, so I will now pass the data into the results. 
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Pressed submit button!")

        console.log(this.state.query)
        this.searchForBooks(this.state.query)
    }

    handleBookSave = id => {
        console.log("clicked save button!")
        const book = this.state.results.find(books => books.id === id)
        console.log(book)

        API.saveEntry({
            username: "test",
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            googleId: book.id
        }).then(() => console.log("entry saved!")).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>Try searching for something</p>
            </div>
        )
    }



}

export default Question;