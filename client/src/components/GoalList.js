import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuth0 } from "../react-auth0-spa";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function GoalList() {
    const { user } = useAuth0();

    const percentage = 69;
    
    return (
        <div>
            <Row sm="10">
                <Card body className="goal-layout">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <CardTitle>Goal Title</CardTitle>
                </Card>
                <Card body className="goal-layout">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <CardTitle>Goal Title</CardTitle>
                </Card>
                <Card body className="goal-layout">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <CardTitle>Goal Title</CardTitle>
                </Card>
            </Row>
            
        </div>
    )
}
