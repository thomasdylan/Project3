import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../utils/API';

const FormUpdate = (props) => {
    const [amount, setAmount] = useState();
    const FormSubmit = (e) => {
        e.preventDefault();
        const goalData = {
            amount: amount
        };
        API.updateGoal(goalData)
            .then(() => console.log("Successfully updated goal"))
            .catch(err => console.log(err));

        window.location.reload(false);
    };

    return (
        <Form inline onSubmit={FormSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="update" className="mr-sm-2">Update Amount</Label>
                <Input type="number" 
                       name="goalUpdate"
                       value={amount}
                       onChange={e => setAmount(e.target.value)} 
                       id="updateGoal" 
                       placeholder="1000" />
            </FormGroup>
            <Button color="success">Submit</Button>
        </Form>
    );
}

export default FormUpdate;