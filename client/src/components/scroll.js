import React from "react";

import { ListGroup, ListGroupItem, FormGroup, Form, Label, Input } from "reactstrap";

export default class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChosen: false,
        }
    }


    render() {

        return (
            <div>
                <ListGroup>
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
                        <Form>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox">{' '}
                                        Check me out</Input>
                                </Label>
                            </FormGroup>
                        </Form>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }

}