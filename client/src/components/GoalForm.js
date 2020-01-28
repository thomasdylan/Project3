import React from 'react';


const GoalForm = (props) => {

    const FormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={FormSubmit}>
            <div className="form-group">
                <label for="goalTitle">Goal Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="goalTitle"
                    aria-describedby="goalTitle"
                    placeholder="ex. Savings, Vacation etc."/>
            </div>
            <div className="form-group">
                <label for="goalAmount">Goal Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="goalAmount"
                    placeholder="$1000"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default GoalForm;