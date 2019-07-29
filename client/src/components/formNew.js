import React from "react";

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export function NewForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="username" id="entry-name" placeholder="Give your Entry a username!"></Input>
            </FormGroup>
            <FormGroup>
                <Label for="search">Look up a Book</Label>
                <Input type="search" name="search" id="search-term" placeholder="Search for a book!"></Input>
                <Button>Search!</Button>
            </FormGroup>
        </Form>

    )

}

export default NewForm;

