import React, { Component } from "react";
import API from "../utils/API"

import { Input, FormBtn } from "../components/form";
import { BookList, BookListItem } from "../components/booklist";

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


    render() {
        return (
            <div>
                <p>Try searching for something</p>
                <Input value={this.state.query}
                    name="query"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search..."></Input>
                <FormBtn onClick={this.handleFormSubmit}>Submit Book</FormBtn>
                {!this.state.results.length ? (<h1 className="text-center">No Books to Display</h1>) : (
                    <BookList>
                        {this.state.results.map(books =>
                            (
                                <div>
                                    <BookListItem
                                        key={books.id}
                                        title={books.volumeInfo.title}
                                        link={books.volumeInfo.infoLink}
                                        authors={books.volumeInfo.authors.join(", ")}
                                        description={books.volumeInfo.description}
                                        thumbnail={books.volumeInfo.imageLinks.thumbnail}
                                    >
                                    </BookListItem>

                                </div>)

                        )}
                    </BookList>
                )}
            </div>

        )
    }

}

export default Home;