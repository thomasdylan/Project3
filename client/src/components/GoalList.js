import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuth0 } from "../react-auth0-spa";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import API from '../utils/API';


export default function GoalList() {
    const { user } = useAuth0();
    const [userGoals, setUserGoals] = useState();
    const [goalTitle, setGoalTitle] = useState();
    const [goalUser, setGoalUser] = useState(user.sub);
    const [currentAmount, setCurrentAmount] = useState();
    const [goalAmount, setGoalAmount] = useState();
    const currentUser = user.sub;

    useEffect(() => {
        API.getGoal(currentUser)
        .then(data  => {
            setUserGoals(data.data);
            console.log(userGoals);
        });
    }, []);
    
    return (
        <div>
            <Row sm="12">

                    <Card body className="goal-layout" onClick={() => console.log("Clicked")}>
                        <CircularProgressbar value={5} text={`${(5)}%`} />
                        <CardTitle>{goalUser}</CardTitle>
                    </Card>

            </Row>
        </div>
    )
}
