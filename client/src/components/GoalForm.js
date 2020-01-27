import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <Form>
            <FormGroup row>
                <Label for="GoalTitle" sm={2}>Goal Title</Label>
                <Col sm={10}>
                    <Input type="text" name="text" id="goalTitle" placeholder="ex. Savings, Vacation" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="GoalAmount" sm={2}>Target Amount</Label>
                <Col sm={10}>
                    <Input type="text" name="text" id="goalAmount" placeholder="$" />
                </Col>
            </FormGroup>
            <Button>Confirm</Button>
        </Form>
    );
}

export default Example;