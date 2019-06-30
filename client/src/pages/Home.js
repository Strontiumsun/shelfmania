import React, { Component } from "react";
import API from "../utils/API"

import { Input, FormBtn } from "../components/form";

class Home extends Component {
    // Initialize this.state.books as an empty array
    state = {
        query: "",
        results: [],
    };

    searchForBooks = (query) => {
        API.findBooks(query)
            .then(res => console.log(res.data))
        // I want to check that the search works.
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
            </div>

        )
    }

}

export default Home;