import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuth0 } from "../react-auth0-spa";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import API from '../utils/API';


export default function GoalList() {
    const { user } = useAuth0();
    const [userGoals, setUserGoals] = useState([]);
    const [goalTitle, setGoalTitle] = useState();
    const [goalUser] = useState(user.sub);
    
    useEffect(() => {
        API.getGoal(goalUser)
        .then(res => {
            setUserGoals(res.data);
            console.log("userGoals: ", userGoals);
        });
    }, [userGoals]);
    
    return (
        <div>
            <Row sm="12">
                {userGoals.map(goal => {
                    return(
                    <Card body className="goal-layout" onClick={() => console.log("Clicked")}>
                        <CircularProgressbar value={goal.goalAmount / goal.amount} text={`${goal.goalAmount / goal.amount}%`} />
                        <CardTitle>{goal.title}</CardTitle>
                    </Card>
                    )
                })}
            </Row>
        </div>
    )
}


