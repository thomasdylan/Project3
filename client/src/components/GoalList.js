import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuth0 } from "../react-auth0-spa";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import API from '../utils/API';


export default function GoalList() {
    const { user } = useAuth0();
    const [goalTitle, setGoalTitle] = useState();
    const [goalUser, setGoalUser] = useState(user.sub);
    const [currentAmount, setCurrentAmount] = useState();
    const [goalAmount, setGoalAmount] = useState();
    const percentage = 69;
    const currentUser = user.sub;

    useEffect(() => {
        API.getGoal(currentUser)
        .then(data  => {
            console.log("useEffect data return: ", data);
            console.log("goal user: ", goalUser);
            console.log("current user: ", currentUser)
        });
    }, []);
    
    return (
        <div>
            <Row sm="12">
                <Card body className="goal-layout" onClick={() => console.log("Clicked") }>
                    <CircularProgressbar value={percentage} text={`${goalAmount - currentAmount}%`} />
                    <CardTitle>{goalTitle}</CardTitle>
                </Card>
                <Card body className="goal-layout" onClick={() => console.log("Clicked") }>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <CardTitle>Goal Title</CardTitle>
                </Card>
                <Card body className="goal-layout" onClick={() => console.log("Clicked") }>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <CardTitle>Goal Title</CardTitle>
                </Card>
            </Row>
        </div>
    )
}
