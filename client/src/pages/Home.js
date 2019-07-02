import React, { Component } from "react";
import API from "../utils/API"

import { Input, FormBtn } from "../components/form";
// import { BookList, BookListItem } from "../components/booklist";
import { List, ListItem } from "../components/list"
import SubmitBtn from "../components/submitbtn";

class Home extends Component {
    // Initialize this.state.books as an empty array
    state = {
        query: "",
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

        // API.saveEntry({
        //     username: "test",
        //     title: book.volumeInfo.title,
        //     link: book.volumeInfo.infoLink,
        //     authors: book.volumeInfo.authors,
        //     description: book.volumeInfo.description,
        //     image: book.volumeInfo.imageLinks.thumbnail,
        //     googleId: book.id
        // }).then(res => console.log("entry saved!")).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>Try searching for something</p>
                <Input value={this.state.query}
                    name="query"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search..."></Input>
                <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
                <List>
                    {!this.state.results.length ? (<div></div>) : (<div>
                        {this.state.results.map(books => (
                            <div>
                                <ListItem
                                    key={books.id}
                                    id={books.id}
                                    title={books.volumeInfo.title}
                                    authors={books.volumeInfo.authors.join(", ")}
                                    description={books.volumeInfo.description}
                                    thumbnail={books.volumeInfo.imageLinks.thumbnail}
                                    link={books.volumeInfo.infoLink}
                                />
                                <SubmitBtn
                                    onClick={() => this.handleBookSave(books.id)}
                                >Submit Book code: {books.id}</SubmitBtn>
                            </div>
                        ))}
                    </div>)}
                </List>
            </div>

        )
    }

}

export default Home;