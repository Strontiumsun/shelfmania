import React, { Component } from "react";
import API from "../utils/API"
import { ListGroup, ListGroupItem, Button } from "reactstrap";



// Blue: Full Question Component
// Red 1: Question Component
// Cyan 1: Question Text Component
// Red 2: Form Component
// Cyan 2: Input components
// Cyan 3: Scrolling List Component
// Yellow: List Item component
// Orange 1: List Item Image Component
// Orange 2: List Item Description Component
// Orange 3: List Item Checkbox Component




class QuestionSpace extends Component {
    render() {
        const question = this.props.question;
        return (
            <div>
                <h3>Current Question: </h3>
                <h1>{question}</h1>
            </div>
        )
    }
}


class QuestionHolder extends Component {
    render() {
        return (
            <div>
                <QuestionSpace question={this.props.question} />
            </div>
        )
    }
}


class FormScroll extends Component {
    render() {
        return (
            <ListGroup>
                {this.props.books.map(books => (
                    <div>
                        <CustomListItem
                            key={books.id}
                            id={books.id}
                            title={books.title}
                            author={books.author.join(", ")}
                            description={books.description}
                            thumbnail={books.thumbnail}
                            link={books.link}
                        />

                    </div>
                ))}
            </ListGroup>
        )
    }
}


function CustomListItem(props) {
    return (
        <ListGroupItem key={props.id}>
            <div className="list-title">
                {props.title}
            </div>
            <div className="list-author">
                {props.author}
            </div>
            <div>
                Description: {props.description}
            </div>
            <div className="list-thumb">
                <img src={props.thumbnail} alt="thumbnail"></img>
            </div>
            <div className="list-link">
                <a href={props.link}>More Info</a>
            </div>
        </ListGroupItem>

    )
}



// class FormInput extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="form-group">
//                     <label>Your Name</label>
//                     <input type="text" className="form-control" placeholder="Your Name"></input>
//                 </div>
//                 <div className="form-group">
//                     <label>Search...</label>
//                     <input type="text" className="form-control" placeholder="Search..."></input>
//                     <Button>Search!</Button>
//                 </div>
//             </div>

//         )
//     }
// }


class FormHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            username: "",
            results: []
        }
    }
    searchForBooks = (query) => {
        API.findBooks(query)
            .then(res => console.log(res.data))
        // .then(res => this.setState({ results: res.data }))
        // .catch(err => console.log(err))
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
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="username"
                        onChange={this.handleInputChange}
                    >
                    </input>
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={this.state.query}
                        name="query"
                        onChange={this.handleInputChange}>
                    </input>
                    <Button onClick={this.handleFormSubmit}>Search!</Button>
                </div>
                <FormScroll books={this.state.results} />
                <Button>Submit!</Button>
            </form>
        )
    }
}


const BOOKS = [
    { title: "The Princess Diaries", author: ["Meg Cabot"], description: "Mia is a princess, wow!", thumbnail: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355011082l/38980.jpg", link: "https://www.megcabot.com/princessdiaries/", id: 1 },
    { title: "The Hunger Games", author: ["Suzanne Collins"], description: "Katniss is in a whole lotta trouble", thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41LPBRNaVCL._SX355_BO1,204,203,200_.jpg", link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwjPoKqkkt3jAhWFneAKHaeoDoYQFjABegQIBxAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Hunger_Games_(novel)&usg=AOvVaw34d6CdVg1xKs3l1BeRRDos", id: 2 }
]

export default class FullQuestion extends Component {
    render() {
        return (
            <div>
                <QuestionHolder question={"What's Your Favorite Teen Novel?"} />
                <FormHolder books={BOOKS} />
            </div>
        )
    }
}

