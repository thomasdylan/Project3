import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import API from '../utils/API';

const GoalForm = (props) => {

    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const { user } = useAuth0();

    const FormSubmit = (e) => {
        e.preventDefault();
        const goalData = {
            title: title,
            user: user.sub,
            goalAmount: amount
        };
        API.saveGoal(goalData)
            .then(() => console.log("Successfully added goal"))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={FormSubmit}>
            <div className="form-group">
                <label for="goalTitle" autocomplete="off">Goal Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="goalTitle"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    aria-describedby="goalTitle"
                    placeholder="ex. Savings, Vacation etc."/>
            </div>
            <div className="form-group">
                <label for="goalAmount" autocomplete="off">Goal Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="goalAmount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="$1000"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default GoalForm;